import * as Effects from "redux-saga/effects";
import { searchUserActions, TypesSearchUser } from '../actions';
import { ApiTypes } from "../../api/api";
import { adminApi } from '../../api/adminApi';
import { ProfileType, ActionSaveEditType, PayloadType } from './../../types/types';

// найденный пользователь 
// например: https://xn--90afzgbamc1ah.xn--p1ai/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C/12
async function getOneUser(id: number) {
  const response = await adminApi.getOneUser(id);
  return response.data;
}

function* workerGetOneUser(action: PayloadType<number>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes<ProfileType> = yield Effects.call(getOneUser, action.payload);
    yield Effects.put(searchUserActions.isLoadedAction(false));
    yield Effects.put(searchUserActions.setUser(data.items));
    yield Effects.put(searchUserActions.isLoadedAction(true));
  } catch (e) {
    console.log(e);
  }
}

export function* watchOneUser() {
  yield Effects.takeEvery(TypesSearchUser.LOAD_USER as never, workerGetOneUser);
}

// Сохранение профиля
async function editProfile(formData: ProfileType, userId: number) {
  const response = await adminApi.editProfile(formData, userId);
  return response.data;
}

function* workerEditProfile(action: PayloadType<ActionSaveEditType>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes = yield Effects.call(
      editProfile,
      action.payload.formData,
      action.payload.userId
    );
    console.log(data);
    //yield put(searchUserActions.saveProfile(data));
  } catch (e) {
    console.log(e);
  }
}
export function* watchEditProfile() {
  yield Effects.takeEvery(TypesSearchUser.SAVE_PROFILE as never, workerEditProfile);
}
