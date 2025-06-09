import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/ShopPage/ui_shop_page.dart' show TeaShopProductOverview;

class TeaShopLandingPage extends StatelessWidget {


  const TeaShopLandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: Row(children: [
      Spacer(), // Schiebt den Button nach rechts
      IconButton(
        icon: Icon(Icons.verified_user),
        onPressed: () {
          context.go('/login');
        },
      ),
      ],)),
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

              ElevatedButton(
              onPressed: () {
               context.go('/products');
              },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurple,
                  padding:
                      const EdgeInsets.symmetric(horizontal: 36, vertical: 16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30),
                  ),
                ),
                child: const Text(
                  'Jetzt entdecken',
                  style: TextStyle(fontSize: 20),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}