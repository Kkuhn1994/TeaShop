
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';
import 'package:teashop/ReferalLogic/referal_number_cubit.dart';
import 'package:teashop/Core/responsiveness.dart';

class StandardScaffold extends StatefulWidget {
  final AppBar appbar;
  Widget ?bottomNavigationBar;
  final Widget body;

  StandardScaffold({
    Key? key,
    required this.appbar,
    required this.body,
    this.bottomNavigationBar
  }) : super(key: key);

  @override
  State<StandardScaffold> createState() => _StandardScaffoldState();
}

class _StandardScaffoldState extends State<StandardScaffold> {

  int referralCount = 0;
  double opacity = 0;


   @override
  void initState() {
    super.initState();
    _fetchReferralCount();
    _fetchOpacity();
  }

   Future<void> _fetchReferralCount() async {
    try {
      int count = await context.read<ReferralNumberCubit>().getNumber();
      setState(() {
        referralCount = count;
      });
    } catch (e) {
      print('Fehler beim Abrufen der Referral Count: $e');
    }
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

  EdgeInsets _getResponsiveMargins(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    
    // Ansatz 1: Prozentuale Margins
    double horizontalMargin = screenWidth * 0.08; // 8% der Bildschirmbreite
    double verticalMargin = screenHeight * 0.06;   // 6% der Bildschirmhöhe
    
    // Ansatz 2: Breakpoint-basierte Margins
    if (screenWidth < 600) {
      // Kleine Bildschirme (Handys)
      return const EdgeInsets.all(15);
    } else if (screenWidth < 900) {
      // Mittlere Bildschirme (kleine Tablets)
      return const EdgeInsets.all(20);
    } else if (screenWidth < 1200) {
      // Große Bildschirme (große Tablets)
      return const EdgeInsets.all(30);
    } else {
      // Sehr große Bildschirme (Desktop)
      return const EdgeInsets.all(50);
    }
}

  EdgeInsets _getResponsivePadding(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    
    if (screenWidth < 600) {
      return const EdgeInsets.all(6);
    } else if (screenWidth < 900) {
      return const EdgeInsets.all(8);
    } else {
      return const EdgeInsets.all(10);
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
            Center(
              child: Container(
                padding: _getResponsivePadding(context),
                margin: _getResponsiveMargins(context),
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
                child: SingleChildScrollView(child: widget.body),
              ),)
          ],
        ),
        bottomNavigationBar: widget.bottomNavigationBar,
      );}
    );
  }
}

