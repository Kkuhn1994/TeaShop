import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class GoBackButton extends StatelessWidget {
  String ?location;
  GoBackButton({
    Key? key,
    this.location,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return IconButton(
          icon: Image.asset(
            'assets/back.png',
            height: 24,
            width: 24,
          ),
          onPressed: () {
              if (Navigator.canPop(context)) 
          {
            Navigator.pop(context); // Nur ausführen, wenn eine vorherige Route existiert
            } else {
              context.go(location!);
            }// Back navigation
          }, // Icon color
        );
      }
}

