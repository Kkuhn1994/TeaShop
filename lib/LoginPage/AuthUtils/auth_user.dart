import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AuthenticatedUser {
  final User supabaseUser;
  final Map<String, dynamic> profileData;

  AuthenticatedUser({required this.supabaseUser, required this.profileData});

  // Factory method to create from Supabase user and profile data
  factory AuthenticatedUser.fromSupabase(
    User user,
    Map<String, dynamic> profileData,
  ) {
    return AuthenticatedUser(supabaseUser: user, profileData: profileData);
  }

  // Getter
  String get id => supabaseUser.id;
  String? get email => supabaseUser.email;
  // Radio? get sex => profileData['sex'];

  DateTime? get createdAt =>
      profileData['created_at'] != null
          ? DateTime.parse(profileData['created_at'])
          : null;
}