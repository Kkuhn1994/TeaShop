import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/Core/app_bar_button.dart';
import 'package:teashop/LandingPage/side_scrollable.dart';
import 'package:teashop/ShopPage/ui_shop_page.dart' show TeaShopProductOverview;

class TeaShopLandingPage extends StatelessWidget {

  const TeaShopLandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return StandardScaffold(
      appbar: AppBar(
          backgroundColor: Colors.deepPurple, // <-- Set background color
          title: Row(
            children: [
              Spacer(), // Pushes the button to the right
              AppBarButton(
                text: 'Zum Login',
                iconPath: 'assets/login2.png',
                onPressed: () {
                context.go('/login');
              },
              ),
            ],
          ),
        ), 
      body: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 64),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
               Text(
                'EcoFitSip',
                style: const TextStyle(
                  fontSize: 42,
                  fontWeight: FontWeight.bold,
                  color: Colors.deepPurple,
                ),
                textAlign: TextAlign.center,
              ),
              SiteScrollable(),
              const SizedBox(height: 32),
               Button1(
                onPressed: () {
                  context.go('/products');
                },
                child: 'Zu den Produkten',
              ),
              const SizedBox(height: 16),
              Text(
              'VISION',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Unsere Vision ist es, eine Welt zu gestalten, in der jeder Schluck eines Getränks nicht nur den Körper stärkt, '
              'sondern auch den Planeten schützt. EcoFitSip steht für die harmonische Verbindung aus gesunder Ernährung und ökologischer Verantwortung.'
              ' Wir wollen innerhalb der nächsten fünf Jahre zur führenden Marke für nachhaltige und funktionale'
              'Getränke in Europa werden – mit echtem Impact auf Konsumenten, Umwelt und'
              ' Gesellschaft.',
              style: TextStyle(fontSize: 12, color: Colors.deepPurple),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              'Mission',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Unsere Mission ist es, gesundheits- und umweltbewusste Menschen in ihrem Alltag zu'
'unterstützen – durch hochwertige, biologische Getränke, die mit funktionalen Inhaltsstoffen'
'angereichert sind und durch innovative, klimapositive Anbaumethoden und nachhaltige'
'Verpackungslösungen überzeugen. Dabei setzen wir auf ein ganzheitliches Kundenerlebnis:'
'digital gestützte Beratung und eine transparente Kommunikation sind feste Bestandteile'
' unserer Strategie.',
              style: TextStyle(fontSize: 12, color: Colors.deepPurple),
              textAlign: TextAlign.center,
            ),
                 const SizedBox(height: 8),
            Text(
              'Werte',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple,
              ),
            ),
            const SizedBox(height: 8),
            RichText(
  textAlign: TextAlign.left,
  text: TextSpan(
    style: TextStyle(
      fontSize: 12,
      color: Colors.deepPurple,
      height: 1.4,
    ),
    children: [
      TextSpan(
        text: '• Nachhaltigkeit leben',
        style: TextStyle(fontWeight: FontWeight.bold),
      ),
      TextSpan(
        text: ' – Wir handeln ökologisch verantwortungsvoll über die gesamte '
              'Wertschöpfungskette hinweg: vom Anbau bis zur Verpackung.\n\n'
              '',
      ),
      TextSpan(
        text: '• Transparenz & Fairness',
        style: TextStyle(fontWeight: FontWeight.bold),
      ),
      TextSpan(
        text: ' – Wir arbeiten mit fairen Bio-Partnern weltweit zusammen '
              'und kommunizieren offen über Herkunft und Wirkung unserer Produkte.\n\n'
              '',
      ),
      TextSpan(
        text: '• Kundenzentrierung',
        style: TextStyle(fontWeight: FontWeight.bold),
      ),
      TextSpan(
        text: ' – Unser Handeln richtet sich konsequent an den Bedürfnissen '
              'unserer Community aus – mit individuell gestaltbaren Angeboten.\n\n'
              '',
      ),
      TextSpan(
        text: '• Wirkung',
        style: TextStyle(fontWeight: FontWeight.bold),
      ),
      TextSpan(
        text: ' – Wir folgen dem Anspruch, die Gesundheit als auch die mentale '
              'Leistungsfähigkeit zu fördern.\n\n'
              '',
      ),
      TextSpan(
        text: '• Soziale Verantwortung',
        style: TextStyle(fontWeight: FontWeight.bold),
      ),
      TextSpan(
        text: ' – Wir investieren in Bildung, nachhaltige '
              'Landwirtschaftsprojekte und fördern eine gerechte, grüne Zukunft.',
      ),
    ],
  ),
),
           
             

              const SizedBox(height: 40),
               Button1(
                onPressed: () {
                  context.go('/impressum');
                },
                child: 'Impressum',
              ),

            
            ],
          ),
        ),
      ),
      );
  }
}






