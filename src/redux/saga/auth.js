import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { authAPI } from '../../api/userAPI';
import { authActions, TypesAuth } from '../actions';
import { stopSubmit } from 'redux-form';

// login
async function getLogin(login, password, forgotMe) {
  const response = await authAPI.login(login, password, forgotMe);
  return await response.data;
}

function* workerGetLogin(action) {
  try {
    const data = yield call(
      getLogin,
      action.payload.login,
      action.payload.password,
      action.payload.forgotMe,
    );
    if (data.resultCode === 0) {
      // запускаем auth Saga
      yield put(authActions.loadUserData());
    } else {
      if (data.resultCode === 10) {
        // слишком много попыток - блокируем кнопку
        yield put(authActions.setTryTimeButton(true));
      }
      if (data.resultCode === 2) {
        // TODO: Аккаунт не активирован
      }
      let message = data.message;
      yield put(stopSubmit('login', { _error: message }));
    }
  } catch (e) {
    let message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield put(stopSubmit('login', { _error: message }));
  }
}

export function* watchGetLogin() {
  yield takeEvery(TypesAuth.SET_LOGIN, workerGetLogin);
}

// Auth
async function getAuthUserData() {
  const response = await authAPI.getAuthData();
  return await response.data;
}

function* workerGetAuth() {
  try {
    const data = yield call(getAuthUserData);
    if (data.resultCode === 0) {
      yield put(authActions.toggleIsFetching(true));
      yield put(authActions.setAuthUserData(data.items, true));
      yield delay(1500);
      yield put(authActions.toggleIsFetching(false));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchGetAuth() {
  yield takeEvery(TypesAuth.LOAD_USER_DATA, workerGetAuth);
}

// logout
async function getLogout() {
  const response = await authAPI.logout();
  return await response.data;
}

function* workerGetLogout() {
  try {
    const data = yield call(getLogout);
    if (data.resultCode === 0) {
      yield put(authActions.setAuthUserData(null, null, null, false));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchGetLogout() {
  yield takeEvery(TypesAuth.SET_LOGOUT, workerGetLogout);
}
