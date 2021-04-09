import * as Effects from "redux-saga/effects";
import { stopSubmit } from 'redux-form';
import { TypesRememberPassword, rememberPasswordActions } from '../actions';
import { resultCodeEnum } from '../../Enum/resultCode';
import { ApiTypes } from "../../api/api";
import { regApi } from '../../api/regApi';
import { RememberPasswordType, PayloadType } from '../../types/types';


// Remember Password
async function getRememberPassword(formData: RememberPasswordType) {
  const response = await regApi.rememberPassword(formData);
  return response.data;
}

function* workerGetRememberPassword(action: PayloadType<RememberPasswordType>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes = yield Effects.call(getRememberPassword, action.payload);
    if (data.resultCode === resultCodeEnum.Success) {
      // блокируем кнопку
      yield Effects.put(rememberPasswordActions.setTryTimeButton(true));
    } else {
      const message = data.message;
      yield Effects.put(stopSubmit('rememberPassword', { _error: message }));
      // блокируем кнопку
      yield Effects.put(rememberPasswordActions.setTryTimeButton(true));
    }
  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield Effects.put(stopSubmit('rememberPassword', { _error: message }));
  }
}

export function* watchGetRememberPassword() {
  yield Effects.takeEvery(TypesRememberPassword.SET_REMEMBER_PASSWORD as never, workerGetRememberPassword);
}
