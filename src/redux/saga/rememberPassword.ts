import { ServerResponse, PayloadType } from './../../types/types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { regAPI } from '../../api/userAPI';
import { TypesRememberPassword, rememberPasswordActions } from '../actions';
import { stopSubmit } from 'redux-form';
import { resultCodeEnum } from '../../Enum/resultCode';
import { RememberPasswordType } from '../../types/types';

// Remember Password
async function getRememberPassword(formData: RememberPasswordType) {
  const response = await regAPI.rememberPassword(formData);
  return await response.data;
}

function* workerGetRememberPassword(action: PayloadType<RememberPasswordType>) {
  try {
    const data: ServerResponse = yield call(getRememberPassword, action.payload);
    if (data.resultCode === resultCodeEnum.Success) {
      // блокируем кнопку
      yield put(rememberPasswordActions.setTryTimeButton(true));
    } else {
      const message = data.message;
      yield put(stopSubmit('rememberPassword', { _error: message }));
      // блокируем кнопку
      yield put(rememberPasswordActions.setTryTimeButton(true));
    }
  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield put(stopSubmit('rememberPassword', { _error: message }));
  }
}

export function* watchGetRememberPassword() {
  yield takeEvery(TypesRememberPassword.SET_REMEMBER_PASSWORD as never, workerGetRememberPassword);
}
