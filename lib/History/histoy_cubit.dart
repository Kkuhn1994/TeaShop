import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:teashop/LoginPage/AuthUtils/auth_status.dart';
import 'package:teashop/ProductLogic/product_state.dart';

class HistoyCubit extends Cubit<ProductState> {
  // Initialisiere den Cubit mit einer leeren Liste
  final SupabaseClient _supabase;
  HistoyCubit(this._supabase) : super(ProductState([0,0,0]));



  void buyProducts(List<int> boughtProducts, AuthAuthenticated workerState) async
  {
    
    final user = workerState.user.supabaseUser;
    List<int> numbers = List.from(state.numbers);
    numbers[0] += boughtProducts[0];
    numbers[1] += boughtProducts[1];
    numbers[2] += boughtProducts[2];    
    debugPrint('test');
     final updatedData =
          await _supabase
              .from('users')
              .update({
                'produkt1': numbers[0],
                'produkt2': numbers[1],
                'produkt3': numbers[2],
              })
              .eq('id', user.id)
              .select()
              .single();
      List<int> newNumbers = [numbers[0], numbers[1], numbers[2]];
      emit(ProductState(newNumbers));
  }

  void setHistory(int ?nr1,int ?nr2,int ?nr3) {
      List<int> newNumbers = [nr1 ?? 0, nr2 ?? 0, nr3 ?? 0];
      emit(ProductState(newNumbers));
  }

  List<int> getHistory() {
    List<int> numbers = List.from(state.numbers);

    final ranks = List<int>.generate(numbers.length, (i) => i)
    ..sort((a, b) => numbers[b].compareTo(numbers[a]));

  final result = List<int>.filled(numbers.length, 0);
  for (int i = 0; i < ranks.length; i++) {
    result[ranks[i]] = i;
  }

  debugPrint(result.toString());
  return result;
  }
}