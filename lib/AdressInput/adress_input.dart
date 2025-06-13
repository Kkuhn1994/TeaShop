import 'package:flutter/material.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';

class AdressInput extends StatefulWidget {
  const AdressInput({super.key});

  @override
  State<AdressInput> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<AdressInput> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
   final TextEditingController nameController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return StandardScaffold(
      appbar: AppBar(
          title: Text(
            'Gib deine Adresse ein',
            style: TextStyle(
              color: Colors.white, // Set the text color to white
            ),
          ),
          backgroundColor: Colors.deepPurple,
          leading: GoBackButton(
            location: '/',
          )
        ),
      body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
               TextField(
                controller: nameController,
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(
                  labelText: 'Name',
                ),
              ),
              SizedBox(height: 16),
              TextField(
                controller: emailController,
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(
                  labelText: 'Strasse + Hausnr',
                ),
              ),
              SizedBox(height: 16),
              TextField(
                controller: passwordController,
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'Stadt + PLZ',
                ),
              ),
              SizedBox(height: 16),
            
                Button1(
                  onPressed: () => {}, 
                child: '       Login       '),
              SizedBox(height: 16), 
                Button1(
                  onPressed: () {}, 
                child: 'Registrierung'),
            ],
          ),
        ),);
  }
}

