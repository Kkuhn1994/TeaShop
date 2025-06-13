abstract class AuthStatus {
  const AuthStatus();
}

class AuthInitial extends AuthStatus {}

class AuthLoading extends AuthStatus {}

class AuthAuthenticated extends AuthStatus {
  const AuthAuthenticated();
}

class AuthPending extends AuthStatus {

  const AuthPending();
}

class AuthUnauthenticated extends AuthStatus {}

class AuthError extends AuthStatus {
  final String message;
  const AuthError(this.message);
}
