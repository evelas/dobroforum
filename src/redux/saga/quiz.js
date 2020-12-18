import { takeEvery, put, call } from 'redux-saga/effects';
import { quizAPI } from '../../api/userAPI';
import { TypesQuiz, authActions } from '../actions';
import { stopSubmit } from 'redux-form';

// quiz
async function getQuiz(email, answer) {
  const response = await quizAPI.quiz(email, answer);
  return await response.data;
}

function* workerGetQuiz(action) {
  try {
    const data = yield call(getQuiz, action.payload.email, action.payload.answer);
    if (data.resultCode === 31) {
      // TODO: логика после
      yield put(authActions.loadUserData());
      let message = 'Вы ответили правильно!';
      yield put(stopSubmit('quiz', { _error: message }));
    } else {
      yield put(authActions.loadUserData());
      let message = 'Вы ответили неправильно!';
      yield put(stopSubmit('quiz', { _error: message }));
    }
  } catch (e) {
    let message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield put(stopSubmit('quiz', { _error: message }));
  }
}

export function* watchGetQuiz() {
  yield takeEvery(TypesQuiz.SET_QUIZ, workerGetQuiz);
}
