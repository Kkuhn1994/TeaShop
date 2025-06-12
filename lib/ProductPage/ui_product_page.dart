import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/app_bar_button.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/ShopPage/ui_shop_page.dart';
import 'package:teashop/ShoppingCart/ui_shopping_cart.dart';

class ProductDetailPage extends StatelessWidget {
  final Product product;

  const ProductDetailPage({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return StandardScaffold(
      appbar: AppBar(
        title: Row( 
          children: [
            Text(product.name),
            Spacer(), // Pushes the button to the right
            AppBarButton(
                text: 'Zum Warenkorb',
                iconPath: 'assets/shoppingcart.png',
              ),
            ]),
        backgroundColor: Colors.deepPurple,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Produktbild
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Image.network(
                product.imageUrl,
                width: double.infinity,
                height: 250,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(height: 16),

            // Produktname
            Text(
              product.name,
              style: const TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),

            // Preis
            Text(
              '€${product.price.toStringAsFixed(2)}',
              style: const TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple,
              ),
            ),
            const SizedBox(height: 16),

            // Beschreibung
            Text(
              product.description,
              style: const TextStyle(fontSize: 18),
            ),
            const SizedBox(height: 24),

            // Optional: Button zum Kaufen / Warenkorb
            Center(
              child: Button1(
                onPressed: () {},
                child: 'Zum Warenkorb hinzufügen')
            ),
       
          ],
        ),
      ),
    );
  }
}