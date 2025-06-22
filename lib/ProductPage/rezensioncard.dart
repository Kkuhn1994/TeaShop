import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:teashop/RezensionCubit/rezension_cubit.dart';

class Rezensionen extends StatelessWidget {
  final product;
  const Rezensionen({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<RezensionenCubit, List<String>>(
      builder: (context, rezensionen) {
            return ListView.builder(
        itemCount: rezensionen.length,
        itemBuilder: (context, index) {
      return Container(
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8), // Abstand außen
        padding: const EdgeInsets.all(12), // Innenabstand
        decoration: BoxDecoration(
          color: Colors.white, // Hintergrundfarbe weiß
          border: Border.all(color: Colors.grey.shade300), // grauer Rahmen
          borderRadius: BorderRadius.circular(8), // abgerundete Ecken
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.2),
              spreadRadius: 1,
              blurRadius: 5,
              offset: const Offset(0, 2), // leichter Schatten nach unten
            ),
          ],
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Icon(Icons.comment, color: Colors.deepPurple),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                rezensionen[index] + " " + getStarEmoji(4),
                style: const TextStyle(fontSize: 16, color: Colors.black87),
              ),
            ),
          ],
        ),
      );
        },
      );
          },
    );
  }
}

String getStarEmoji(int rating) {
  int empty = 5 - rating;

  return '☆' * rating +  '⭐' * empty;
}