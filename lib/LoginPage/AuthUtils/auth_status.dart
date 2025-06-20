import 'package:teashop/LoginPage/AuthUtils/auth_user.dart';

abstract class AuthStatus {
  const AuthStatus();
}

class AuthInitial extends AuthStatus {}

class AuthLoading extends AuthStatus {}

class AuthAuthenticated extends AuthStatus {
  final AuthenticatedUser user;
  const AuthAuthenticated(this.user);
}

class AuthPending extends AuthStatus {

  const AuthPending();
}

class AuthUnauthenticated extends AuthStatus {}

class AuthError extends AuthStatus {
  final String message;
  const AuthError(this.message);
}
