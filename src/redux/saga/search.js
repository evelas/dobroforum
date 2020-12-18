import { takeEvery, put, call } from 'redux-saga/effects';
import { adminAPI } from '../../api/userAPI';
import { searchActions, TypesSearch } from '../actions';

// Поиск
async function getSearch(text) {
  const response = await adminAPI.getSearch(text);
  return await response.data;
}

function* workerGetSearch(action) {
  try {
    const data = yield call(getSearch, action.payload);
    yield put(searchActions.setSearchProduct(data.items));
  } catch (e) {
    console.log(e);
  }
}

export function* watchSearchProducts() {
  yield takeEvery(TypesSearch.LOAD_SEARCH, workerGetSearch);
}
