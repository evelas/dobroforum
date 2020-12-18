import { takeEvery, put, call } from 'redux-saga/effects';
import { adminAPI } from '../../api/userAPI';
import { searchUserActions, TypesSearchUser } from '../actions';

async function getOneUser(id) {
  const response = await adminAPI.getOneUser(id);
  return await response.data;
}

function* workerGetOneUser(action) {
  try {
    const data = yield call(getOneUser, action.payload);
    yield put(searchUserActions.isLoadedAction(false));
    yield put(searchUserActions.setUser(data));
    yield put(searchUserActions.isLoadedAction(true));
  } catch (e) {
    console.log(e);
  }
}

export function* watchOneUser() {
  yield takeEvery(TypesSearchUser.LOAD_USER, workerGetOneUser);
}

// Сохранение профиля
async function editProfile(formData, userId) {
  const response = await adminAPI.editProfile(formData, userId);
  return await response.data;
}

function* workerEditProfile(action) {
  try {
    const data = yield call(editProfile, action.payload.formData, action.payload.userId);
    console.log(data);
    //yield put(searchUserActions.saveProfile(data));
  } catch (e) {
    console.log(e);
  }
}
export function* watchEditProfile() {
  yield takeEvery(TypesSearchUser.SAVE_PROFILE, workerEditProfile);
}
