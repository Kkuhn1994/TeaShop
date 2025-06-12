
import 'package:flutter/material.dart';

class StandardAppBar extends StatelessWidget {
  final AppBar appbar;
  final Widget body;
  const StandardAppBar({
    Key? key,
    required this.appbar,
    required this.body,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appbar,
      body: body,
    );
}
}

