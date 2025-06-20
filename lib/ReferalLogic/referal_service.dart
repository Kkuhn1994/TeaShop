// import 'package:http/http.dart' as http;

// class ReferralService {
//   // Beispielhafte URL mit Platzhalter für den userID
//   static const String _baseUrl = 'https://github.com/Kkuhn1994/TeaShop/Referral/';

//   // Funktion zum Überprüfen des Referral-Links
//   Future<bool> checkReferralLink(String userId) async {
//     final referralUrl = '$_baseUrl$userId';

//     try {
//       final response = await http.get(Uri.parse(referralUrl));

//       if (response.statusCode == 200) {
//         return true;
//       } else {
//         // Fehler beim Abrufen der Referral-Daten
//         return false;
//       }
//     } catch (e) {
//       // Fehler bei der Verbindung oder beim Abrufen der Daten
//       return false;
//     }
//   }
// }
