import { takeEvery, put, call } from 'redux-saga/effects';
import { regAPI } from '../../api/userAPI';
import { TypesRememberPassword, rememberPasswordActions } from '../actions';
import { stopSubmit } from 'redux-form';

// Remember Password
async function getRememberPassword(formData) {
  const response = await regAPI.rememberPassword(formData);
  return await response.data;
}

function* workerGetRememberPassword(action) {
  try {
    const data = yield call(getRememberPassword, action.payload);
    if (data.resultCode === 0) {
      // блокируем кнопку
      yield put(rememberPasswordActions.setTryTimeButton(true));
    } else {
      let message = data.message;
      yield put(stopSubmit('rememberPassword', { _error: message }));
      // блокируем кнопку
      yield put(rememberPasswordActions.setTryTimeButton(true));
    }
  } catch (e) {
    let message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield put(stopSubmit('rememberPassword', { _error: message }));
  }
}

export function* watchGetRememberPassword() {
  yield takeEvery(TypesRememberPassword.SET_REMEMBER_PASSWORD, workerGetRememberPassword);
}
