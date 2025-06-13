
import 'package:flutter/material.dart';

class CannotHitRenderScaffold extends StatelessWidget {
  final AppBar appbar;
  final Widget body;
  Widget ?bottomNavigationBar;

  CannotHitRenderScaffold({
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
          Center(
            child: Container(
              padding: const EdgeInsets.all(10),
              margin: const EdgeInsets.all(50),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.8),
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.3),
                    blurRadius: 10,
                    offset: Offset(0, 4),
                  ),
                ],
              ),
              child: body,
            ),)
        ],
      ),
      bottomNavigationBar: bottomNavigationBar,
    );
  }
}

