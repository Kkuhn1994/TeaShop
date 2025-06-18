import 'package:flutter_bloc/flutter_bloc.dart';

class ReferralCubit extends Cubit<String?> {
  ReferralCubit() : super(null);

  void setReferralCode(String code) {
    emit(code);
  }

  void clearReferralCode() {
    emit(null);
  }

  String ?getReferralCode() {
    return state;
  }
}
