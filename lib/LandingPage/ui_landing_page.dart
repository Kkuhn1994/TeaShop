import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/Core/app_bar_button.dart';
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
              Image.network(
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
                height: 180,
              ),
              const SizedBox(height: 32),
              Text(
                'EcoFitSip',
                style: const TextStyle(
                  fontSize: 42,
                  fontWeight: FontWeight.bold,
                  color: Colors.deepPurple,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 16),
              const Text(
                'Entdecke die feinsten Teesorten, frisch und nachhaltig. '
                'Genieße natürlichen Geschmack aus aller Welt – direkt bei dir zu Hause.',
                style: TextStyle(
                  fontSize: 18,
                  color: Colors.black87,
                  height: 1.4,
                ),
                textAlign: TextAlign.center,
              ),

              const SizedBox(height: 40),

              Button1(
                onPressed: () {
                  context.go('/products');
                },
                child: 'Zu den Produkten',
              ),
            ],
          ),
        ),
      ),
      );
  }
}






