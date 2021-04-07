import { ProfileType, ServerResponse, PayloadRegType } from './../../types/types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { regAPI } from '../../api/userAPI';
import { TypesRegistration } from '../actions/registration';
import { stopSubmit } from 'redux-form';
import { resultCodeEnum } from '../../Enum/resultCode';

// Registation
async function getRegistation(formData: ProfileType) {
  const response = await regAPI.registration(formData);
  return await response.data;
}

function* workerGetRegistation(action: PayloadRegType) {
  try {
    const data: ServerResponse = yield call(getRegistation, action.payload);
    if (data.resultCode === resultCodeEnum.Success) {
      // TODO: Логика после регистрации
    } else {
      const message = data.message;
      yield put(stopSubmit('registration', { _error: message }));
    }
  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield put(stopSubmit('registration', { _error: message }));
  }
}

export function* watchGetRegistation() {
  // eslint-disable-next-line
  yield takeEvery(TypesRegistration.SET_REGISTRATION as any, workerGetRegistation);
}
