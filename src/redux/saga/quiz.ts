import { PayloadQuizType, ServerResponse } from './../../types/types';
// import { takeEvery, put, call } from 'redux-saga/effects';
import * as Effects from "redux-saga/effects";
import { quizAPI } from '../../api/userAPI';
import { TypesQuiz, authActions } from '../actions';
import { stopSubmit } from 'redux-form';
import { resultCodeEnum } from '../../Enum/resultCode';


// quiz
async function getQuiz(email: string, answer: string) {
  const response = await quizAPI.quiz(email, answer);
  return await response.data;
}

function* workerGetQuiz(action: PayloadQuizType): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ServerResponse = yield Effects.call(
      getQuiz,
      action.payload.email,
      action.payload.answer
    );
    if (data.resultCode === resultCodeEnum.QuizAnswerIsRight) {
      // TODO: логика после
      yield Effects.put(authActions.loadUserData());
      const message = 'Вы ответили правильно!';
      yield Effects.put(stopSubmit('quiz', { _error: message }));
    } else {
      yield Effects.put(authActions.loadUserData());
      const message = 'Вы ответили неправильно!';
      yield Effects.put(stopSubmit('quiz', { _error: message }));
    }
  } catch (e) {
    const message = 'Сервер перегружен. Пожалуйста, подождите 10 минут.';
    yield Effects.put(stopSubmit('quiz', { _error: message }));
  }
}

export function* watchGetQuiz() {
  // eslint-disable-next-line
  yield Effects.takeEvery(TypesQuiz.SET_QUIZ as any, workerGetQuiz);
}
