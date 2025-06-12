import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class AppBarButton extends StatelessWidget {
  final String text;
  final String iconPath;
  const AppBarButton({
    Key? key,
    required this.text,
    required this.iconPath
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        context.go('/login');
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.white,
        foregroundColor: Colors.black, // Text/Icon-Farbe
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(30),
        ),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
        elevation: 3,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min, // Nur so breit wie Inhalt
        children: [
          Image.asset(
            iconPath,
            height: 24,
            width: 24,
          ),
          SizedBox(width: 8),
          Text(text),
        ],
      ),
    );
      }
}

