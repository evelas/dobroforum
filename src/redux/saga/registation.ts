import * as Effects from "redux-saga/effects";
import { stopSubmit } from 'redux-form';
import { TypesRegistration } from '../actions/registration';
import { resultCodeEnum } from '../../Enum/resultCode';
import { ApiTypes } from '../../api/api';
import { regApi } from '../../api/regApi';
import { ProfileType, PayloadType } from './../../types/types';

// Registation
async function getRegistation(formData: ProfileType) {
  const response = await regApi.registration(formData);
  return response.data;
}

function* workerGetRegistation(action: PayloadType<ProfileType>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes = yield Effects.call(getRegistation, action.payload);
    if (data.resultCode === resultCodeEnum.Success) {
      // TODO: Логика после регистрации
      // Сейчас появляется уведомление о том,
      // что нужно перейти на почту и активировать акк
    } else {
      const message = data.message;
      yield Effects.put(stopSubmit('registration', { _error: message }));
    }
  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield Effects.put(stopSubmit('registration', { _error: message }));
  }
}

export function* watchGetRegistation() {
  yield Effects.takeEvery(TypesRegistration.SET_REGISTRATION as never, workerGetRegistation);
}
