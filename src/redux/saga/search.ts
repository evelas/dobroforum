import * as Effects from "redux-saga/effects";
import { searchActions, TypesSearch } from '../actions';
import { ApiTypes } from "../../api/api";
import { adminApi } from '../../api/adminApi';
import { PayloadType, ProfileType } from './../../types/types';

// Поиск пользователя по фамилии или логину
async function getSearch(textSearch: string) {
  const response = await adminApi.getSearch(textSearch);
  return response.data;
}

function* workerGetSearch(action: PayloadType<string>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes<ProfileType> = yield Effects.call(getSearch, action.payload);
    yield Effects.put(searchActions.setSearchProduct(data.items));
  } catch (e) {
    console.log(e);
  }
}

export function* watchSearchProducts() {
  yield Effects.takeEvery(TypesSearch.LOAD_SEARCH as never, workerGetSearch);
}
