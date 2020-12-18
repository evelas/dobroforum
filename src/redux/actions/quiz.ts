export const TypesQuiz = {
  SET_QUIZ: '/reducers/quiz/SET_QUIZ' as const,
  SET_DISABLED: '/reducers/quiz/SET_DISABLED' as const,
};

export const quizActions = {
  setQuiz: (email: string, answer: string) => ({
    type: TypesQuiz.SET_QUIZ,
    payload: {
      email,
      answer,
    },
  }),
  setDisabled: (disabled: string) => ({
    type: TypesQuiz.SET_DISABLED,
    payload: disabled,
  }),
};
