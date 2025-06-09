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

    try {
      final authResponse = await _supabase.auth.signUp(
        email: email.trim(),
        password: password.trim(),
        emailRedirectTo: 'https://kkuhn1994.github.io/TeaShop/auth/callback',
      );

      if (authResponse.user == null) {
        throw AuthException('Registration failed: No user returned');
      }
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
      authenticateWithRole(authResponse, userData);
    } on AuthException catch (e) {
      debugPrint('sigupError');
      emit(AuthError(e.message));
    }
  }

  Future<void> signIn(String email, String password) async {
    emit(AuthLoading());
    try {
      final response = await _supabase.auth.signInWithPassword(
        email: email.trim(),
        password: password.trim(),
      );
      if (response.user == null) {
        throw AuthException('Authentication failed');
      }
      final userData =
          await _supabase
              .from('users')
              .select()
              .eq('id', response.user!.id)
              .single();

      authenticateWithRole(response, userData);
    } on AuthException catch (e) {
      debugPrint('sigInError');
      emit(AuthError(e.message));
    }
  }

  Future<void> signOut() async {
    emit(AuthLoading());
    try {
      await _supabase.auth.signOut();
      emit(AuthUnauthenticated());
    } catch (e) {
      emit(AuthError('Logout failed'));
    }
  }

  void authenticateWithRole(AuthResponse authResponse,Map<String, dynamic> userData,) 
  {
      final authenticatedUser = AuthenticatedUser(
        supabaseUser: authResponse.user!,
        profileData: userData,
      );
      emit(AuthAuthenticated(authenticatedUser));
      debugPrint('auth success');
  }
}
