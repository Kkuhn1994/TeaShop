import 'package:flutter/material.dart';
import 'package:teashop/Core/standard_scaffold.dart';

class CartPageUI extends StatelessWidget {
  const CartPageUI({super.key});

  @override
  Widget build(BuildContext context) {
    // Beispielhafte Dummy-Produkte
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

    return StandardScaffold(
      appbar: AppBar(
        title: const Text('Warenkorb'),
        backgroundColor: Colors.deepPurple,
      ),
      body: ListView.builder(
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
            child: ListTile(
              contentPadding: const EdgeInsets.all(12),
              title: Text(
                product['name']!.toString(),
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ),
              ),
              subtitle: Text('€${(product['price'] as double).toStringAsFixed(2)}'),
              trailing: IconButton(
                icon: const Icon(Icons.delete, color: Colors.red),
                onPressed: () {
                  // Hier keine Logik, nur UI
                },
              ),
            ),
          );
        },
      ),
      bottomNavigationBar: Container(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
        color: Colors.white,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Gesamt: €16.73',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.deepPurple,
              ),
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.deepPurple,
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              onPressed: () {
                
              },
              child: const Text(
                'Zur Kasse',
                style: TextStyle(fontSize: 16),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
