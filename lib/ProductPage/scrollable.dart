
import 'package:flutter/material.dart';

class SiteScrollable2 extends StatelessWidget {
  final product;
  const SiteScrollable2({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
  height: 180,
  child: ListView(
    shrinkWrap: true,
    scrollDirection: Axis.horizontal,
    children: [
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  product.imageUrl, // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  product.imageUrl2, // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  product.imageUrl3, // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  product.imageUrl4, // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
    ],
  ),
);
  }
}