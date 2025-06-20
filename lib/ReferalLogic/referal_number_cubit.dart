
import 'package:flutter_bloc/flutter_bloc.dart';

class NumberState {
  final int number;

  NumberState(this.number);
}

// Der Cubit selbst, der den Zustand der Zahl verwaltet
class ReferralNumberCubit extends Cubit<NumberState> {
  ReferralNumberCubit() : super(NumberState(0)); // Startwert ist 0

  // Methode, um die Zahl zu erhöhen
  void increment() {
    emit(NumberState(state.number + 1));
  }

  // Methode, um die Zahl zu verringern
  void decrement() {
    emit(NumberState(state.number - 1));
  }

  // Methode, um die Zahl auf einen bestimmten Wert zu setzen
  void setNumber(int newNumber) {
    emit(NumberState(newNumber));
  }

  int getNumber() {
    return state.number;
  }
}
