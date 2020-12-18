import { takeEvery, put, call } from 'redux-saga/effects';
import { regAPI } from '../../api/userAPI';
import { TypesRegistration } from '../actions/registration';
import { stopSubmit } from 'redux-form';

// Registation
async function getRegistation(formData) {
  const response = await regAPI.registration(formData);
  return await response.data;
}

function* workerGetRegistation(action) {
  try {
    const data = yield call(getRegistation, action.payload);
    if (data.resultCode === 0) {
      // TODO: Логика после регистрации
    } else {
      let message = data.message;
      yield put(stopSubmit('registration', { _error: message }));
    }
  } catch (e) {
    let message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield put(stopSubmit('registration', { _error: message }));
  }
}

export function* watchGetRegistation() {
  yield takeEvery(TypesRegistration.SET_REGISTRATION, workerGetRegistation);
}
