
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';
import 'package:teashop/ReferalLogic/referal_number_cubit.dart';



class ProductScaffold extends StatefulWidget {
  final AppBar appbar;
  final Widget body;
  Widget ?bottomNavigationBar;

  ProductScaffold({
    Key? key,
    required this.appbar,
    required this.body,
    this.bottomNavigationBar
  });

  @override
  State<ProductScaffold> createState() => _ProductScaffoldState();
}

class _ProductScaffoldState extends State<ProductScaffold> {
  double opacity = 0;
     @override
  void initState() {
    super.initState();
    _fetchOpacity();
  }
  
    Future<void> _fetchOpacity() async {
    try {
      int count = await context.read<ReferralNumberCubit>().getNumber();
      setState(() {
        opacity = 0.07 * (10 - (count % 10));
      });
    } catch (e) {
      print('Fehler beim Abrufen der Referral Count: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AuthCubit, AuthStatus>(
      builder: (context, state) {
        _fetchOpacity();
      return Scaffold(
        appBar: widget.appbar,
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
              color: Colors.white.withOpacity(opacity), // oder z.B. Colors.white.withOpacity(0.3)
            ),
      
            // Der eigentliche Inhalt
            widget.body,
          
          ],
        ),
        bottomNavigationBar: widget.bottomNavigationBar,
      );}
    );
  }
}