import 'package:flutter/material.dart';
import 'package:teashop/Core/product_overview_scaffold.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/ProductPage/ui_product_page.dart';

class Product {
  final String name;
  final String description;
  final double price;
  final String imageUrl;

  Product({
    required this.name,
    required this.description,
    required this.price,
    required this.imageUrl,
  });
}

class TeaShopProductOverview extends StatelessWidget {
  final List<Product> products = [
    Product(
      name: 'Jasmin Grüntee',
      description: 'Feiner Grüntee mit natürlichem Jasminaroma.',
      price: 4.99,
      imageUrl:
          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
    ),
    Product(
      name: 'Schwarzer Earl Grey',
      description: 'Klassischer schwarzer Tee mit Bergamotte.',
      price: 5.49,
      imageUrl:
          'https://images.unsplash.com/photo-1517686469429-1c1f6ca8473b?auto=format&fit=crop&w=400&q=80',
    ),
    Product(
      name: 'Kräutertee Detox',
      description: 'Frische Kräutermischung zur Entgiftung.',
      price: 6.25,
      imageUrl:
          'https://images.unsplash.com/photo-1527169402691-a1f7f2674b9b?auto=format&fit=crop&w=400&q=80',
    ),
    // Füge weitere Produkte hinzu
  ];

  TeaShopProductOverview({super.key});

  @override
  Widget build(BuildContext context) {
    return ProductScaffold(
      appbar: AppBar(
        title: const Text('EcoFitSip – Produktübersicht'),
        backgroundColor: Colors.deepPurple,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: products.length,
        itemBuilder: (context, index) {
          final product = products[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 16),
            elevation: 4,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            child: ListTile(
              contentPadding: const EdgeInsets.all(16),
              leading: ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: Image.network(
                  product.imageUrl,
                  width: 70,
                  height: 70,
                  fit: BoxFit.cover,
                ),
              ),
              title: Text(
                product.name,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                ),
              ),
              subtitle: Text(product.description),
              trailing: Text(
                '€${product.price.toStringAsFixed(2)}',
                style: const TextStyle(
                  color: Colors.deepPurple,
                  fontWeight: FontWeight.bold,
                  fontSize: 16,
                ),
              ),
              onTap: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => ProductDetailPage(product: product),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}
