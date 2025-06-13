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

void main() async {
  await Supabase.initialize(
    url: 'https://tbcmrtbpzmlpzbsodxoi.supabase.co',
    anonKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiY21ydGJwem1scHpic29keG9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzEyNDYsImV4cCI6MjA2NTA0NzI0Nn0.jomEnfjrVlXTAfuHAjfPUgxvB6-mp1f1ICCcBODep1g',
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
      routes: [
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
        // GoRoute(
        //   path: '/productcard',
        //   builder: (context, state) => ProductDetailPage(),
        // ),
        GoRoute(
          path: '/shoppingcart',
          builder: (context, state) => CartPageUI(),
        ),
        GoRoute(
          path: '/login',
          builder: (context, state) => LoginPage(),
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



