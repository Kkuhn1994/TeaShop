import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/standard_scaffold.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';
import 'package:teashop/ReferalLogic/referal_number_cubit.dart';
import 'package:teashop/ReferalLogic/referral_cubit.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  State<Profile> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<Profile> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
   final TextEditingController nameController = TextEditingController();
  int? referralCount;
   String referralLink = "";

  @override
  void initState() {
    super.initState();
    _fetchReferralCount();
    _fetchReferralCode();
  }

   Future<void> _fetchReferralCount() async {
    try {
      int? count = await context.read<ReferralNumberCubit>().getNumber();
      setState(() {
        referralCount = count;
      });
    } catch (e) {
      print('Fehler beim Abrufen der Referral Count: $e');
    }
  }

  Future<void> _fetchReferralCode() async {
    String ?referralCode = await context.read<ReferralCubit>().getReferralCode();
    setState(() {
      referralLink = "https://kkuhn1994.github.io/TeaShop/#/referral/$referralCode";
    });
  }
  @override
  Widget build(BuildContext context) {
    
    return StandardScaffold(
      appbar: AppBar(
          title: Text(
            'Profil',
            style: TextStyle(
              color: Colors.white, // Set the text color to white
            ),
          ),
          backgroundColor: Colors.deepPurple,
          leading: GoBackButton(
            location: '/products',
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
              Text(
                referralLink,
                style: TextStyle(
                  color: Colors.blue,
                  decoration: TextDecoration.underline,
                ),
              ),
              SizedBox(height: 16),
              Row(children: [
                Text('Referrals:${referralCount}'),
              ],),
                Button1(
                  onPressed: () => {}, 
                child: '       Daten Speichern       '),
             
            ],
          ),
        ),);
  }
}
