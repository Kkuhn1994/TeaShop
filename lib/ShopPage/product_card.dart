import 'package:flutter/material.dart';
import 'package:teashop/ProductPage/ui_product_page.dart';
class ProductView extends StatelessWidget {
  final int index;
  final product;
  const ProductView({super.key, required this.index, required this.product});

@override
Widget build(BuildContext context) {
  return Card(
    margin: const EdgeInsets.only(bottom: 16),
    elevation: 4,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(12),
    ),
    child: ListTile(
      contentPadding: const EdgeInsets.all(16),
      title: Padding(
        padding: EdgeInsets.only(bottom: 16, top:16),
        child: Row(
          
          children: [
            ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  product.imageUrl, // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 16),
            Text(
          product.name,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 18,
          ),
        ),
        ],),
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
            builder: (context) => ProductDetailPage(product: product, index: index),
          ),
        );
      },
    ),
  );
}

}
