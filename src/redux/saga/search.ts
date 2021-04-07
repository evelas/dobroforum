import { PayloadSearchType, ServerResponse } from './../../types/types';
import { takeEvery, put, call } from 'redux-saga/effects';
import { adminAPI } from '../../api/userAPI';
import { searchActions, TypesSearch } from '../actions';

// Поиск
async function getSearch(textSearch: string) {
  const response = await adminAPI.getSearch(textSearch);
  return await response.data;
}

function* workerGetSearch(action: PayloadSearchType) {
  try {
    const data: ServerResponse = yield call(getSearch, action.payload);
    yield put(searchActions.setSearchProduct(data.items));
  } catch (e) {
    console.log(e);
  }
}

export function* watchSearchProducts() {
  yield takeEvery(TypesSearch.LOAD_SEARCH as never, workerGetSearch);
}
