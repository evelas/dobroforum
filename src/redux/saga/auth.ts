import { PayloadType, ServerResponse } from './../../types/types';
import * as Effects from "redux-saga/effects";
import { authAPI } from '../../api/userAPI';
import { authActions, TypesAuth } from '../actions';
import { stopSubmit } from 'redux-form';
import { resultCodeEnum } from '../../Enum/resultCode';

async function getLogin(login: string, password: string, forgotMe: boolean) {
  const response = await authAPI.login(login, password, forgotMe);
  return await response.data;
}

function* workerGetLogin(action: PayloadType): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ServerResponse = yield Effects.call(
      getLogin,
      action.payload.login,
      action.payload.password,
      action.payload.forgotMe,
    );
    if (data.resultCode === resultCodeEnum.Success) {
      // запускаем auth Saga
      yield Effects.put(authActions.loadUserData());
    } else {
      if (data.resultCode === resultCodeEnum.ToMuchAttempt) {
        // слишком много попыток - блокируем кнопку
        yield Effects.put(authActions.setTryTimeButton(true));
      }
      if (data.resultCode === resultCodeEnum.AccountIsNotActivated) {
        // TODO: Аккаунт не активирован
      }
      const message = data.message;
      yield Effects.put(stopSubmit('login', { _error: message }));
    }
  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield Effects.put(stopSubmit('login', { _error: message }));
  }
}

export function* watchGetLogin(): Generator {
  // eslint-disable-next-line
  yield Effects.takeEvery(TypesAuth.SET_LOGIN as any, workerGetLogin);
}

// Auth
async function getAuthUserData(): Promise<ServerResponse> {
  const response = await authAPI.getAuthData();
  return await response.data;
}

function* workerGetAuth(): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ServerResponse = yield Effects.call(getAuthUserData);
    if (data.resultCode === resultCodeEnum.Success) {
      yield Effects.put(authActions.toggleIsFetching(true));
      yield Effects.put(authActions.setAuthUserData(data.items, true));
      yield Effects.delay(1500);
      yield Effects.put(authActions.toggleIsFetching(false));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchGetAuth() {
  yield Effects.takeEvery(TypesAuth.LOAD_USER_DATA, workerGetAuth);
}

// logout
async function getLogout(): Promise<ServerResponse> {
  const response = await authAPI.logout();
  return await response.data;
}

function* workerGetLogout(): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ServerResponse = yield Effects.call(getLogout);
    if (data.resultCode === resultCodeEnum.Success) {
      yield Effects.put(authActions.setAuthUserData(null, false));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchGetLogout() {
  yield Effects.takeEvery(TypesAuth.SET_LOGOUT, workerGetLogout);
}
