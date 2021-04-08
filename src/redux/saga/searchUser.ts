import { ProfileType, ActionSaveEditType, PayloadType } from './../../types/types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { adminAPI } from '../../api/userAPI';
import { searchUserActions, TypesSearchUser } from '../actions';

async function getOneUser(id: number) {
  const response = await adminAPI.getOneUser(id);
  return await response.data;
}

function* workerGetOneUser(action: PayloadType<number>) {
  try {
    const data: ProfileType = yield call(getOneUser, action.payload);
    yield put(searchUserActions.isLoadedAction(false));
    yield put(searchUserActions.setUser(data));
    yield put(searchUserActions.isLoadedAction(true));
  } catch (e) {
    console.log(e);
  }
}

export function* watchOneUser() {
  // eslint-disable-next-line
  yield takeEvery(TypesSearchUser.LOAD_USER as any, workerGetOneUser);
}

// Сохранение профиля
async function editProfile(formData: ProfileType, userId: number) {
  const response = await adminAPI.editProfile(formData, userId);
  return await response.data;
}

function* workerEditProfile(action: PayloadType<ActionSaveEditType>) {
  try {
    const data: ProfileType = yield call(
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
  yield takeEvery(TypesSearchUser.SAVE_PROFILE as never, workerEditProfile);
}
