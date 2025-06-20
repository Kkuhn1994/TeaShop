import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/app_bar_button.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/productNumber.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/ProductPage/scrollable.dart';
import 'package:teashop/ShopPage/ui_shop_page.dart';

class ProductDetailPage extends StatefulWidget {
  final Product product;
  final int index;
  const ProductDetailPage({
    super.key, 
    required this.product,
    required this.index
  });

  @override
  State<ProductDetailPage> createState() => _ProductDetailPageState();
}

class _ProductDetailPageState extends State<ProductDetailPage> {

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
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SiteScrollable2(product: widget.product),                                                                                                                   
          
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
            ProductNumber(index: widget.index, context: context,),
          ],
        ),
      ),
    );
  }
}
