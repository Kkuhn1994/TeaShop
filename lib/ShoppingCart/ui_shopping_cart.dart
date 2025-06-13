import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/cannotHitARenderBoxScaffold.dart';
import 'package:teashop/Core/productNumber.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/ProductLogic/product_cubit.dart';
import 'package:teashop/ProductLogic/product_state.dart';

class CartPageUI extends StatelessWidget {
  const CartPageUI({super.key});

  @override
  Widget build(BuildContext context) {
    // Beispielhafte Dummy-Produkte
    final List<double> prices = [4.99, 5.49, 6.25, 10];
    final products = [
      {
        'name': 'Jasmin Grüntee',
        'price': 4.99,
        'imageUrl':
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
      },
      {
        'name': 'Schwarzer Earl Grey',
        'price': 5.49,
        'imageUrl':
            'https://images.unsplash.com/photo-1517686469429-1c1f6ca8473b?auto=format&fit=crop&w=400&q=80',
      },
      {
        'name': 'Kräutertee Detox',
        'price': 6.25,
        'imageUrl':
            'https://images.unsplash.com/photo-1527169402691-a1f7f2674b9b?auto=format&fit=crop&w=400&q=80',
      },
    ];

    return CannotHitRenderScaffold(
      appbar: AppBar(
        title: const Text('Warenkorb'),
        backgroundColor: Colors.deepPurple,
        leading: GoBackButton(
          location: '/products',
        ),
      ),
      body: Container(
        padding: EdgeInsets.all(10),
        child: ListView.builder(
          padding: const EdgeInsets.all(16),
          itemCount: products.length,
          itemBuilder: (context, index) {
            final product = products[index];
            return Card(
              margin: const EdgeInsets.only(bottom: 16),
              elevation: 3,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              child: BlocBuilder<NumberCubit, ProductState>(
                builder: (context, state) {
                  return ListTile(
                  contentPadding: const EdgeInsets.all(12),
                  title: Text(
                    product['name']!.toString(),
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                  subtitle: Text('€${(product['price'] as double).toStringAsFixed(2)}'),
                   trailing: SizedBox(
                  width: 120, // Set a fixed width to prevent overflow
                  child: ProductNumber(index: index, context: context),
                ),
                );
                 }
                
              ),
            );
          },
        ),
      ),
      bottomNavigationBar: Container(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
        color: Colors.white,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            BlocBuilder<NumberCubit, ProductState>(
              builder: (context, state) {
                double gesamtWert = 0.0;
                for (int i = 0; i < state.numbers.length; i++) {
                  gesamtWert += state.numbers[i] * prices[i];
                }
                return Text(
                'Gesamt: €${gesamtWert.toStringAsFixed(2)}',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.deepPurple,
                ),
              );
              },
              
            ),
            Button1(
              onPressed: () {
                context.go('/adressInput')
              }, 
              child: 'Zur Kasse'),
            
          ],
        ),
      ),
    );
  }
}
