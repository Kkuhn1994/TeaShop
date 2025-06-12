
import 'package:flutter/material.dart';

class ProductScaffold extends StatelessWidget {
  final AppBar appbar;
  final Widget body;
  Widget ?bottomNavigationBar;

  ProductScaffold({
    Key? key,
    required this.appbar,
    required this.body,
    this.bottomNavigationBar
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appbar,
      body: Stack(
        fit: StackFit.expand,
        children: [
          // Hintergrundbild
          Image.asset(
            'assets/background.jpg',
            fit: BoxFit.cover,
          ),
          
          // Farbfilter oder Opazität für Abdunkelung
          Container(
            color: Colors.white.withOpacity(0.7), // oder z.B. Colors.white.withOpacity(0.3)
          ),

          // Der eigentliche Inhalt
          body,
        
        ],
      ),
      bottomNavigationBar: bottomNavigationBar,
    );
  }
}
