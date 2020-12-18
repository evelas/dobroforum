// Не используется
// function* workerInitialize() {
//   try {
//     const data = yield call(getAuthUserData);
//     if (data.status === true) {
//       let { id, email, name } = data;
//       yield put(authActions.setAuthUserData(id, email, name, true));
//       yield put(initializeActions.initializedSuccess);
//     } else {
//       yield put(initializeActions.initializedSuccess);
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }

// function* watchInitialize() {
//   yield takeEvery(TypesInitialize.START_INITIALIZE, workerInitialize);
// }
