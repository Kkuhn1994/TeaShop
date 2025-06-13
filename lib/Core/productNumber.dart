import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:teashop/Core/ui_core.dart';
import 'package:teashop/ProductLogic/product_cubit.dart';
import 'package:teashop/ProductLogic/product_state.dart';

class ProductNumber extends StatelessWidget {
  final int index;
  final BuildContext context;
  ProductNumber({
    Key? key,
  required this.index,
  required this.context
  }) : super(key: key);

    void _increaseQuantity(int index) 
    {
      context.read<NumberCubit>().incrementAtIndex(index);
    }

    void _decreaseQuantity(int index) {
      context.read<NumberCubit>().decrementAtIndex(index);
    }
  @override
  Widget build(BuildContext context) {
    return Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [ IconButton(
            icon:Image.asset(
            'assets/minus.png',
            height: 24,
            width: 24,
          ),
            onPressed: () => _decreaseQuantity(index), // Menge verringern
                        ),
                        BlocBuilder<NumberCubit, ProductState>(
            builder: (context, state) {
              // Die aktuelle Menge des Produkts für den Index anzeigen
              int productQuantity = state.numbers[index];
              return Text(
                '$productQuantity', // Zeigt die aktuelle Produktzahl an
                style: TextStyle(fontSize: 20),
              );
            },
          ),
                        IconButton(
            icon: Image.asset(
            'assets/add.png',
            height: 24,
            width: 24,
          ),
            onPressed: () => _increaseQuantity(index), // Menge erhöhen
                        ),
                        ],
            );
      }
}

