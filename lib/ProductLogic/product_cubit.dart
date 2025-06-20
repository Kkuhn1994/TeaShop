import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:teashop/History/histoy_cubit.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/LoginPage/Cubit/auth_cubit.dart';
import 'product_state.dart';

class NumberCubit extends Cubit<ProductState> {

  NumberCubit() : super(ProductState([0,0,0,0]));

  // Methode, um eine Zahl an einem bestimmten Index zu inkrementieren
  void incrementAtIndex(int index) {
    if (index >= 0 && index < state.numbers.length) {
      List<int> updatedNumbers = List.from(state.numbers);
      updatedNumbers[index] += 1;  // Zahl an diesem Index erhöhen
      emit(ProductState(updatedNumbers));  // Zustand aktualisieren
    }
  }

  // Methode, um eine Zahl an einem bestimmten Index zu dekrementieren
  void decrementAtIndex(int index) {
    if (index >= 0 && index < state.numbers.length) {
      List<int> updatedNumbers = List.from(state.numbers);
      if(updatedNumbers[index] == 0)
      {
        return;
      }
      updatedNumbers[index] -= 1;  // Zahl an diesem Index verringern
      emit(ProductState(updatedNumbers));  // Zustand aktualisieren
    }
  }

  void buyProducts(BuildContext context) async
  {
      context.read<AuthCubit>().buyProducts(context, List.from(state.numbers));
  }
}
