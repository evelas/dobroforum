// unused in this version

export enum resultCode {
  // main
  success = 0,
  emailOrPasswordIsWrong = 1,
  accountIsNotActivated = 2,
  emailIsExists = 3,
  emailNotFound = 4,
  toMuchAttempt = 10,

  // quiz
  quizAnswerIsWrong = 30,
  quizAnswerIsRight = 31,

  // admin
  userNotFound = 6,
}
