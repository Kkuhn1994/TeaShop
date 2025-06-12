import 'package:flutter/material.dart';

class Button1 extends StatelessWidget {
  final VoidCallback? onPressed;
  final String child;

  const Button1({
    Key? key,
    required this.onPressed,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurple,
                  padding:
                      const EdgeInsets.symmetric(horizontal: 36, vertical: 16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30),
                  ),
                ),
      child: Text(
        child,
        style: const TextStyle(color: Colors.white), // ✅ Text wird weiß
      ),
    );
  }
}

