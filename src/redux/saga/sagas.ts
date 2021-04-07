import { all } from 'redux-saga/effects';
import { watchGetRegistation } from './registation';
import { watchGetRememberPassword } from './rememberPassword';
import { watchGetLogin, watchGetAuth, watchGetLogout } from './auth';
import { watchSearchProducts } from './search';
import { watchOneUser, watchEditProfile } from './searchUser';
import { watchGetQuiz } from './quiz';
export default function* rootSaga() {
  yield all([
    watchGetAuth(),
    watchGetLogin(),
    watchGetLogout(),
    // watchInitialize(),
    watchGetRegistation(),
    watchGetRememberPassword(),
    watchSearchProducts(),
    watchOneUser(),
    watchEditProfile(),
    watchGetQuiz(),
  ]);
}
