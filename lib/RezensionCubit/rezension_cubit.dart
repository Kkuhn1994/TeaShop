import 'package:flutter_bloc/flutter_bloc.dart';

class RezensionenCubit extends Cubit<List<String>> {
  RezensionenCubit() : super([
  "Frischer, grasiger Geschmack mit einer leichten Süße im Abgang. Perfekt für den Start in den Tag – wachmachend, aber sanft. Einer der besten Senchas, die ich probiert habe.",
  "Sehr aromatisch und beruhigend. Die Kamille duftet intensiv und schmeckt nicht bitter. Ideal für abends oder bei Magenbeschwerden. Naturrein und ohne Zusatzstoffe – gefällt mir!",
  "Angenehm kräftige Minznote, die lange im Mund bleibt. Super bei Erkältung oder nach dem Essen. Könnte für meinen Geschmack etwas feiner geschnitten sein, aber top Qualität.",
  "Sehr fruchtig, intensiv rot und leicht säuerlich – genau wie ich es mag. Auch kalt ein Genuss! Wer süße Tees liebt, wird diesen mögen. Kein künstlicher Nachgeschmack.",
]);

  // Lade initiale Rezensionen (z.B. aus API oder lokal)
  void loadRezensionen(List<String> initialRezensionen) {
    emit(List.from(initialRezensionen));
  }

  // Neue Rezension hinzufügen
  void addRezension(String neueRezension) {
    final updated = List<String>.from(state);
    updated.insert(0, neueRezension); 
    emit(updated);
  }

  // Rezension an bestimmter Position löschen
  void removeRezension(int index) {
    final updated = List<String>.from(state);
    if (index >= 0 && index < updated.length) {
      updated.removeAt(index);
      emit(updated);
    }
  }

  // Alle Rezensionen löschen
  void clearRezensionen() {
    emit([]);
  }
}
