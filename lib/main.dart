import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'package:teashop/LandingPage/ui_landing_page.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_service.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';
import 'package:teashop/LoginPage/UI/login_registration_page.dart';
import 'package:teashop/ProductLogic/product_cubit.dart';
import 'package:teashop/ProductPage/ui_product_page.dart';
import 'package:teashop/ShopPage/ui_shop_page.dart';
import 'package:teashop/ShoppingCart/ui_shopping_cart.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  await Supabase.initialize(
    url: 'https://msflobbrlynctsfdzsdq.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZmxvYmJybHluY3RzZmR6c2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MDM2MDUsImV4cCI6MjA2NTM3OTYwNX0.CCN6uT4a9FoYlpSjQpJ-P4GnbuKSAZX_tKk509r4Aj4',
  );
  final supabase = Supabase.instance.client;
  final authService = AuthService(supabase);
  authService.initDeepLinks();

  FlutterError.onError = (details) {
    if (details.exception.toString().contains('data.physical != 0')) {
      return;
    }
    FlutterError.presentError(details);
  };
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});


  @override
  Widget build(BuildContext context) {
    final GoRouter router = GoRouter(
      initialLocation: '/',
      routes: <RouteBase>[
        GoRoute(
          path: '/',
          builder: (context, state) => TeaShopLandingPage(),
        ),
        GoRoute(
          path: '/auth/callback',
          builder: (context, state) => TeaShopProductOverview(),
        ),
        GoRoute(
          path: '/products',
          builder: (context, state) => TeaShopProductOverview(),
        ),
        GoRoute(
          path: '/shoppingcart',
          builder: (context, state) => CartPageUI(),
        ),
        GoRoute(
          path: '/login',
          builder: (context, state) => LoginPage(),
        ),
        GoRoute(
          path: '/loginOrder',
          builder: (context, state) => LoginPageOrder(),
        ),
        
         GoRoute(
          path: '/adressInput',
          builder: (context, state) => LoginPage(),
        ),
        GoRoute(
          path: '/referral/:code', // Hier reagieren wir auf den Referral-Link
          builder: (context, state) {
  // Extrahiere den Referral-Code aus der URL
  final referralCode =  state.params['code'];

  // Wenn ein Referral-Code vorhanden ist, zeigen wir einen Dialog an
  if (referralCode != null) {
    
   
  }
            return TeaShopLandingPage();
          },
        ),
      ],
    );
      return MultiBlocProvider(
        providers: [
        BlocProvider<AuthCubit>(
          create: (context) => AuthCubit(Supabase.instance.client),
        
        ),
        BlocProvider<NumberCubit>(
          create: (context) => NumberCubit(),)
        ],
        child: MaterialApp.router(
        title: 'EcoFitSip TeaShop',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        ),
        routerConfig: router,
            ),
      );
  }
}


void _showReferralDialog(BuildContext context, String referralCode) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Referral Code'),
          content: Text('Your referral code is: $referralCode'),
          actions: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Schließt den Dialog
              },
              child: Text('OK'),
            ),
          ],
        );
      },
    );
  }



