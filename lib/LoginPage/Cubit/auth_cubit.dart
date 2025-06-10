import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_user.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class AuthCubit extends Cubit<AuthStatus> {
  final SupabaseClient _supabase;

  Map<String, dynamic> _currentProfileData = {};

  AuthCubit(this._supabase) : super(AuthInitial()) {
    _initAuth();
  }
  Future<void> _initAuth() async {
    emit(AuthUnauthenticated());
  }


  Future<void> signUp(String email, String password) async {
    
    emit(AuthLoading());
    emit(AuthPending());
    try {
      final authResponse = await _supabase.auth.signUp(
        email: email.trim(),
        password: password.trim(),
        emailRedirectTo: 'https://kkuhn1994.github.io/TeaShop/auth/callback',
      );

      if (authResponse.user == null) {
        throw AuthException('Registration failed: No user returned');
      }
      emit(AuthPending());
      final userData =
        await _supabase
              .from('users')
              .insert({
                'id': authResponse.user!.id,
                'email': email,
                'created_at': DateTime.now().toIso8601String(),
              })
              .select()
              .single();
        emit(AuthPending());
    } on AuthException catch (e) {
      debugPrint('sigupError');
      emit(AuthError(e.message));
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
emit(AuthAuthenticated());
      final session = _supabase.auth.currentSession;
      if (response.user == null) {
        throw AuthException('Authentication failed');
      }
      // if (session == null || session.user.emailConfirmedAt == null) {
      // throw AuthException('Bitte bestätige deine E-Mail-Adresse, bevor du dich einloggst.');
      // }
      final userData =
          await _supabase
              .from('users')
              .select()
              .eq('id', response.user!.id)
              .single();
        
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
