import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/app_bar_button.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/ShopPage/ui_shop_page.dart';
import 'package:teashop/ShoppingCart/ui_shopping_cart.dart';

class ProductDetailPage extends StatefulWidget {
  final Product product;
  const ProductDetailPage({super.key, required this.product});

  @override
  State<ProductDetailPage> createState() => _ProductDetailPageState();
}

class _ProductDetailPageState extends State<ProductDetailPage> {
  int productQuantity = 0;

   void _increaseQuantity() 
   {
    setState(() {
      productQuantity++;
    });
  }

  void _decreaseQuantity() {
    setState(() {
      if (productQuantity > 0) {
        productQuantity--;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return StandardScaffold(
      appbar: AppBar(
        title: Row( 
          children: [
            Text(widget.product.name),
            Spacer(), // Pushes the button to the right
            Spacer(), // Drückt den nächsten Button nach rechts
            // Dein "Zum Warenkorb"-Button
            AppBarButton(
              text: 'Zum Warenkorb',
              iconPath: 'assets/shoppingcart.png',
              onPressed: () {
                context.go('/shoppingcart');
              },
            ),
            ]),
        leading: GoBackButton(),
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
                widget.product.imageUrl,
                width: double.infinity,
                height: 250,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(height: 16),

            // Produktname
            Text(
              widget.product.name,
              style: const TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),

            // Preis
            Text(
              '€${widget.product.price.toStringAsFixed(2)}',
              style: const TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple,
              ),
            ),
            const SizedBox(height: 16),

            // Beschreibung
            Text(
              widget.product.description,
              style: const TextStyle(fontSize: 18),
            ),
            const SizedBox(height: 24),

            // Optional: Button zum Kaufen / Warenkorb
            Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [ IconButton(
            icon:Image.asset(
            'assets/minus.png',
            height: 24,
            width: 24,
          ),
            onPressed: _decreaseQuantity, // Menge verringern
                        ),
                        Text(
            '$productQuantity', // Zeigt die aktuelle Produktzahl an
            style: TextStyle(fontSize: 20),
                        ),
                        IconButton(
            icon: Image.asset(
            'assets/add.png',
            height: 24,
            width: 24,
          ),
            onPressed: _increaseQuantity, // Menge erhöhen
                        ),
                        Button1(
                onPressed: () {},
                child: 'Zum Warenkorb hinzufügen'),],
            ),
       
          ],
        ),
      ),
    );
  }
}
