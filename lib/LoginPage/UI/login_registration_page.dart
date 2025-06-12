import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';

class LoginPage extends StatelessWidget {
  // Controller für die Eingabefelder
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  void login(String email, String password, BuildContext context) {
    context.read<AuthCubit>().signIn(email, password);
  }

  void signUp(String email, String password, BuildContext context) {
    context.read<AuthCubit>().signUp(email, password);
  }

  LoginPage({super.key}); // Konstruktor

  @override
  Widget build(BuildContext context) {
    return BlocListener<AuthCubit, AuthStatus>(
      listener: (context, state) 
      {
        if (state is AuthPending) 
        {
          context.go('/products');
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text("pls confirm email"),
              backgroundColor: Colors.red,
              duration: Duration(seconds: 3),
            ),
          );
        }
        else if (state is AuthAuthenticated) 
        {
          context.go('/products');
        
        }
        else if (state is AuthError) 
        {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(state.message),
              backgroundColor: Colors.red,
              duration: Duration(seconds: 3),
            ),
          );
        }
    },
      child: Scaffold(
        appBar: AppBar(
          title: Text('Login'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              TextField(
                controller: emailController,
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(
                  labelText: 'E-Mail',
                ),
              ),
              SizedBox(height: 16),
              TextField(
                controller: passwordController,
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'Passwort',
                ),
              ),
              SizedBox(height: 16),
            
                Button1(
                  onPressed: () => login(
                        emailController.text,
                        passwordController.text,
                        context,
                      ), 
                child: '       Login       '),
              SizedBox(height: 16),
              
                Button1(
                  onPressed: () => signUp(
                        emailController.text,
                        passwordController.text,
                        context,
                      ), 
                child: 'Registrierung'),
            ],
          ),
        ),
      ),
    );
  }
}