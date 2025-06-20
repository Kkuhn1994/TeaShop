import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/app_bar_button.dart';
import 'package:teashop/Core/back_button.dart';
import 'package:teashop/Core/product_overview_scaffold.dart';
import 'package:teashop/History/histoy_cubit.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';
import 'package:teashop/ProductLogic/product_state.dart';
import 'package:teashop/ProductPage/ui_product_page.dart';
import 'package:teashop/ShopPage/product_card.dart';

class Product {
  final String name;
  final String description;
  final double price;
  final String imageUrl;
  final String imageUrl2;
  final String imageUrl3;
  final String imageUrl4;

  Product({
    required this.name,
    required this.description,
    required this.price,
    required this.imageUrl,
    required this.imageUrl2,
    required this.imageUrl3,
    required this.imageUrl4,
  });
}

class TeaShopProductOverview extends StatelessWidget {
  
  final List<Product> products = [
    Product(
      name: 'Jasmin Grüntee',
      description: 'Feiner Grüntee mit natürlichem Jasminaroma. Dieser Tee bietet ein zartes, blumiges Geschmackserlebnis, das durch die frische, grüne Note des Tees perfekt ergänzt wird. Ideal für entspannte Momente oder als erfrischender Genuss während des ganzen Tages. Genießen Sie die Kombination aus traditioneller Teekunst und der wohltuenden Wirkung von Grüntee, der reich an Antioxidantien ist.',
      price: 4.99,
      imageUrl:
          'assets/grüntee.jpg',
            imageUrl2:
          'assets/teeplant.jpg',
                imageUrl3:
          'assets/teanight.png',
                imageUrl4:
          'assets/teeblätter.jpg',
    ),
    Product(
      name: 'Schwarzer Earl Grey',
      description: 'Klassischer schwarzer Tee mit Bergamotte. Dieser aromatische Tee vereint den kräftigen Geschmack von schwarzem Tee mit der frischen, zitrusartigen Note der Bergamotts. Ideal für Teeliebhaber, die ein intensives und gleichzeitig erfrischendes Erlebnis suchen. Perfekt für den morgendlichen Start in den Tag oder als entspannender Genuss am Nachmittag. Seine antioxidativen Eigenschaften und der belebende Geschmack machen ihn zu einem klassischen Favoriten.',

      price: 5.49,
      imageUrl:
          'assets/earlgrey.jpg',

            imageUrl2:
          'assets/teeplant3.jpg',
                imageUrl3:
          'assets/sunrise.jpg',
                imageUrl4:
          'assets/teeplant2.jpg',
    ),
    Product(
      name: 'Kräutertee Detox',
      description: 'Frische Kräutermischung zur Entgiftung. Dieser Tee ist eine harmonische Kombination aus Kräutern wie Brennnessel, Pfefferminze und Löwenzahn, die traditionell für ihre entgiftenden und reinigenden Eigenschaften bekannt sind. Ein belebender Tee, der Körper und Geist unterstützt, indem er den natürlichen Entgiftungsprozess fördert. Ideal für eine Auszeit zwischendurch oder als Teil einer gesunden Lebensweise. Schmeckt frisch und aromatisch, perfekt für alle, die auf natürliche Weise ihr Wohlbefinden steigern möchten.',

      price: 6.25,
      imageUrl:
          'assets/teerot2.jpg',
              imageUrl2:
          'assets/teenatur.jpg',
                imageUrl3:
          'assets/teeplantage.jpg',
                imageUrl4:
          'assets/teeblätter.jpg',
    
    ),
    // Füge weitere Produkte hinzu
  ];
  List<Product> products2 = [];

  List<Product> sortProductsByBuyHistory(BuildContext context)
  {
    List<int> ranking = context.read<HistoyCubit>().getHistory();
    int first = 0;
    int second = 1;
    int third = 2;
    for(int i = 0; i < 3; i ++)
    {
      if(ranking[i] == 0)
      {
        first = i;
      }
      else if (ranking[i] == 1)
      {
        second = i;
      }
      else if(ranking[i] == 2)
      {
        third = i;
      }
    }
    List<Product> ranked = [
      products[first],
      products[second],
      products[third],
    ];
    return ranked;
  }

  List<int> ranking(BuildContext context)
  {
    List<int> ranked = [0, 1, 2];
    List<int> ranking = context.read<HistoyCubit>().getHistory();
    int first = 0;
    int second = 1;
    int third = 2;
    for(int i = 0; i < 3; i ++)
    {
      if(ranking[i] == 0)
      {
        first = i;
      }
      else if (ranking[i] == 1)
      {
        second = i;
      }
      else if(ranking[i] == 2)
      {
        third = i;
      }
    ranked = [first, second ,third];
    
  }
  return ranked;
  }

  TeaShopProductOverview({super.key});

  @override
  Widget build(BuildContext context) {
    
    // sortProductsByBuyHistory(context);
    products2 = sortProductsByBuyHistory(context);
    return ProductScaffold(
      appbar: AppBar(
        title: Row( 
          children: [
            Text('Produktübersicht'),
            Spacer(), // Pushes the button to the right
            Spacer(), // Drückt den nächsten Button nach rechts
            // Dein "Zum Warenkorb"-Button
            BlocBuilder<AuthCubit, AuthStatus>(
              builder: (context, state) {
                bool isAuthenticated = state is AuthAuthenticated;
                if(isAuthenticated)
                {
                  return AppBarButton(
                      text: 'Zum Profil',
                      iconPath: 'assets/shoppingcart.png',
                      onPressed: () {
                        context.go('/profile');
                      },
                    );
                }
                return Text('');
              }
            ),
            ]),
        leading: GoBackButton(
          location: '/',
        ),
        backgroundColor: Colors.deepPurple,
      ),
      body: BlocListener<HistoyCubit, ProductState>(
         listener: (context, state) {
          products2 = sortProductsByBuyHistory(context);
  },
        child: ListView.builder(
          padding: const EdgeInsets.all(16),
          itemCount: products2.length,
          itemBuilder: (context, index) {
            final product = products2[index];
            final histIndex = ranking(context);
            return ProductView(index: histIndex[index], product: product);
          },
        ),
      ),
    );
  }
}
