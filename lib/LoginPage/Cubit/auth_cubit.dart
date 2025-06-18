import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:teashop/ReferalLogic/referral_cubit.dart';
import 'package:teashop/main.dart';

class AuthCubit extends Cubit<AuthStatus> {
  final SupabaseClient _supabase;

  Map<String, dynamic> _currentProfileData = {};

  AuthCubit(this._supabase) : super(AuthInitial()) {
    _initAuth();
  }
  Future<void> _initAuth() async {
    emit(AuthUnauthenticated());
  }


  Future<void> signUp(String email, String password, BuildContext context) async {
    
    emit(AuthLoading());
    try {
      final authResponse = await _supabase.auth.signUp(
        email: email.trim(),
        password: password.trim(),
        emailRedirectTo: 'https://kkuhn1994.github.io/TeaShop/auth/callback',
      );
      final String ?referralCode = context.read<ReferralCubit>().state; // oder getReferralCode(), je nach Cubit-API
      String ?referredBy;
      zeigeAlertDialog(context, referralCode);
      if (referralCode != null && referralCode.isNotEmpty) {
        referredBy = referralCode;
        addReferral(referralCode);
      }
      final user = authResponse.user;

    if (user != null) {
      // Referral Code erzeugen (z. B. UUID oder sonstiger Logik)
      final referralCode = user.id;

      await _supabase.from('users').insert({
        'id': user.id,
        'email': email.trim(),
        'referral_code': referralCode,
        'referred_by': referredBy, // Kann null sein
      });}
      else
      {
        AuthError('no user');
      }
      emit(AuthPending());
    } on AuthException catch (e) {
      debugPrint('sigupError');
      emit(AuthError(e.message));
    }
  }

  Future<void> addReferral(String referralCode) async {  
    try {
      // 1. referral_number abfragen (achte auf den korrekten Feldnamen!)
      final data = await _supabase
        .from('users')
        .select('referral_number')
        .eq('referral_code', referralCode)
        .single();

      if (data == null) {
        print('Kein Nutzer mit referral_code $referralCode gefunden');
        return;
      }

      int currentNumber = data['referral_number'] ?? 0;

      // 2. referral_number erhöhen
      final updateResponse = await _supabase
        .from('users')
        .update({'referral_number': currentNumber + 1})
        .eq('referral_code', referralCode);

      if (updateResponse.error != null) {
        print('Fehler beim Aktualisieren: ${updateResponse.error!.message}');
      } else {
        print('Referral number erfolgreich erhöht');
      }
    } catch (e) {
      print('Fehler in addReferral: $e');
    }
  }

  Future<void> signIn(String email, String password) async 
  {
    emit(AuthLoading());

    try {
      final response = await _supabase.auth.signInWithPassword(
        email: email.trim(),
        password: password.trim(),
      );

      final userData =
      await _supabase
              .from('users')
              .update({
                'referred_by': 'kun',
              })
              .eq('id', response.user!.id)
              .select()
              .single();
      emit(AuthAuthenticated());
      final session = _supabase.auth.currentSession;
      if (response.user == null) {
        throw AuthException('Authentication failed');
      }



        
    } on AuthException catch (e) {
      debugPrint('sigInError');
      emit(AuthError(e.message));
    }
  }

  Future<void> signOut() async 
  {
    emit(AuthLoading());
    try {
      await _supabase.auth.signOut();
      emit(AuthUnauthenticated());
    } catch (e) {
      emit(AuthError('Logout failed'));
    }
  }

}
