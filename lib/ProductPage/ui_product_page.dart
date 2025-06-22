import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/app_bar_button.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/productNumber.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/ProductPage/rezensioncard.dart';
import 'package:teashop/ProductPage/scrollable.dart';
import 'package:teashop/RezensionCubit/rezension_cubit.dart';
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
  TextEditingController rezensionController = TextEditingController();

  void addRezension(BuildContext context)
  {
    context.read<RezensionenCubit>().addRezension(rezensionController.text);
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
            Row(
              children: [
                Text(
                  '€${widget.product.price.toStringAsFixed(2)}',
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    color: Colors.deepPurple,
                  ),
                ),
                const SizedBox(width: 8),
               

              ],
            ),
               Row(
  children: List.generate(5, (index) {
    return Padding(
      padding: const EdgeInsets.only(right: 2.0),
      child: Image.asset(
        index < widget.product.rating ? 'assets/star_filled.png' : 'assets/star_empty.png',
        width: 20,
        height: 20,
      ),
    );
  }),
),
            const SizedBox(height: 16),

            // Beschreibung
            Text(
              widget.product.description,
              style: const TextStyle(fontSize: 18),
            ),
            const SizedBox(height: 16),
            ProductNumber(index: widget.index, context: context,),
            const SizedBox(height: 24),
             Text(
              'Rezensionen',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple,
              ),
            ),
            const SizedBox(height: 16),
            TextField(
  controller: rezensionController,
  keyboardType: TextInputType.multiline,
  maxLines: 5,   // Höhe des Feldes (mehrzeilig)
  decoration: InputDecoration(
    labelText: 'Deine Rezension',
    border: OutlineInputBorder(),  // schöner Rahmen
  ),
),
const SizedBox(height: 16),
Row(
  children: List.generate(5, (index) {
    return Padding(
      padding: const EdgeInsets.only(right: 2.0),
      child: Image.asset(
        index < 0 ? 'assets/star_filled.png' : 'assets/star_empty.png',
        width: 20,
        height: 20,
      ),
    );
  }),
),
            const SizedBox(height: 16),
            Button1(onPressed: () => addRezension(context), child: 'Produkt bewerten'),
            const SizedBox(height: 16),
            
    SizedBox(
      height: 200,
      child: Rezensionen(product: widget.product)
    ),
          ],
        ),
      ),
    );
  }
}

String getStarEmoji(double rating) {
  int full = rating.floor();
  bool half = rating - full >= 0.5;
  int empty = 5 - full - (half ? 1 : 0);

  return '⭐' * full + (half ? '🌟' : '') + '☆' * empty;
}
