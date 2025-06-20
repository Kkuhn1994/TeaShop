import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/app_bar_button.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';

class Impressum extends StatelessWidget {
  const Impressum({super.key});

  @override
  Widget build(BuildContext context) {
    return StandardScaffold(
      appbar: AppBar(
        title: Row( 
          children: [
            Text('Impressum'),
            Spacer(), // Pushes the button to the right
            Spacer(), // Drückt den nächsten Button nach rechts
            // Dein "Zum Warenkorb"-Button
            BlocBuilder<AuthCubit, AuthStatus>(
              builder: (context, state) {
                bool isAuthenticated = state is AuthAuthenticated;
                if(isAuthenticated)
                {
                  return AppBarButton(
                      text: 'Zum Profil',
                      iconPath: 'assets/shoppingcart.png',
                      onPressed: () {
                        context.go('/profile');
                      },
                    );
                }
                return Text('');
              }
            ),
            ]),
        leading: GoBackButton(
          location: '/',
        ),
        backgroundColor: Colors.deepPurple,
      ),
      body: Text('Bei der vorliegenden Website handelt es sich um ein ausschließlich zu Lehr- und Übungszwecken im Rahmen eines Hochschullabors zum Thema Online Marketing erstelltes studentisches Projekt. Die Inhalte dieser Website, einschließlich der dargestellten Firma, des Firmennamens, der Produkte, Dienstleistungen, Preise, Adressen,Kundendaten und weiterer Informationen, sind vollständig fiktiv.Ein tatsächlicher Geschäftsbetrieb findet nicht statt. Insbesondere können über diese Website keine rechtsverbindlichen Bestellungen getätigt oder sonstige Verträge abgeschlossen werden. Die Darstellung erfolgt rein zu didaktischen Zwecken ohne kommerzielle Absicht.Der verwendete Firmenname wurde exemplarisch und unabhängig von bestehenden Unternehmen gewählt. Sollte ein reales Unternehmen mit identischer oder ähnlicher Firma existieren, besteht keinerlei rechtlicher, wirtschaftlicher oder inhaltlicher Zusammenhang. Es liegt weder eine wettbewerbsrechtlich relevante Nutzung (§§ 3, 4 Nr. 1UWG) noch eine markenmäßige Verwendung im Sinne des § 14 MarkenG vor. Die Nutzung erfolgt ohne die Absicht, bestehende Namens-, Marken- oderKennzeichenrechte Dritter zu verletzen.Diese Website ist nur temporär öffentlich zugänglich und dient ausschließlich der Lehre im Hochschulkontext.Für Rückfragen oder Hinweise wenden Sie sich bitte an den verantwortlichen Hochschullehrenden gemäß § 5 Abs. 1 Nr. 2 TMG: manuel.kern@hs-heilbronn.de'),);
  }
}