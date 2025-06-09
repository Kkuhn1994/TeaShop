import 'package:flutter/rendering.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:uni_links/uni_links.dart';

class AuthService {
  final SupabaseClient _supabase;

  // Supabase-Instanz über Konstruktor übergeben
  AuthService(this._supabase);
  // Deep-Link-Initialisierung
  Future<void> initDeepLinks() async {
    // <- `async` hinzufügen
    // Einmalig beim Start überprüfen (mit await)
    final String? initialLink = await getInitialLink(); // <- `await` hinzufügen
    if (initialLink != null) {
      await _handleAuthLink(initialLink); // Falls _handleAuthLink async ist
    }

    // Dauerhaft auf neue Links hören (Stream bleibt unverändert)
    linkStream.listen((String? link) async {
      // <- `async` hinzufügen, falls nötig
      if (link != null) {
        await _handleAuthLink(link); // Falls _handleAuthLink async ist
      }
    });
  }

  // Link verarbeiten
  Future<void> _handleAuthLink(String link) async {
    // Prüfen, ob es ein Auth-Callback ist
    if (link.contains('auth/callback')) {
      // Supabase-Auth-Status überprüfen
      _supabase.auth.refreshSession().then((_) async {
        // Session aktualisieren und Authentifizierungsstatus prüfen
        await _checkAuthStatus();
      });
    }
  }

  // Authentifizierungsstatus überprüfen
  Future<void> _checkAuthStatus() async {
    final session = await _supabase.auth.currentSession;

    if (session != null && session.user.emailConfirmedAt != null) {
      // E-Mail ist verifiziert - den Verifizierungsstatus in der Datenbank aktualisieren
      try {
        await _supabase
            .from('users')
            .update({'email_verified': true})
            .eq('id', session.user.id);

        // Einfache Benachrichtigung ausgeben (kann angepasst werden)
        debugPrint(
          'E-Mail erfolgreich verifiziert für Benutzer: ${session.user.email}',
        );
      } catch (e) {
        print('Fehler beim Aktualisieren des Verifizierungsstatus: $e');
      }
    }
  }
}