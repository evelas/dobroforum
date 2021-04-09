import * as Effects from "redux-saga/effects";
import { stopSubmit } from 'redux-form';
import { TypesQuiz, authActions } from '../actions';
import { resultCodeEnum } from '../../Enum/resultCode';
import { ApiTypes } from "../../api/api";
import { quizApi } from '../../api/quizApi';
import { PayloadType, ActionQuizType } from './../../types/types';

// quiz
async function getQuiz(email: string, answer: string) {
  const response = await quizApi.quiz(email, answer);
  return response.data;
}

function* workerGetQuiz(action: PayloadType<ActionQuizType>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes = yield Effects.call(
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
  yield Effects.takeEvery(TypesQuiz.SET_QUIZ as never, workerGetQuiz);
}
