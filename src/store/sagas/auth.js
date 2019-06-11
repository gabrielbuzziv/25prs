import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import swal from 'sweetalert';

import { Creators as AuthActions, Types as AuthTypes } from '~/store/ducks/auth';

function* loginRequest(action) {
  try {
    const { data } = action.payload;
    const { username, password } = data;

    if (username === 'admin' && password === 'admin') {
      yield put(push('/'));
      yield put(AuthActions.loginSuccess('admin'));
      return;
    } else if (username === 'autor' && password === 'autor') {
      yield put(push('/'));
      yield put(AuthActions.loginSuccess('autor'));
      return;
    } else {
      yield call(swal, 'Usuário inválido', 'Este usuário não existe', 'error');
      yield put(AuthActions.loginFailure());
      return;
    }
  } catch (error) {
    yield call(swal, 'Usuário inválido', 'Este usuário não existe', 'error');
    yield put(AuthActions.loginFailure());
  }
}

function* logoutRequest() {
  try {
    yield put(push('/login'));
    yield put(AuthActions.logoutSuccess());
  } catch (error) {
    yield put(AuthActions.logoutFailure());
  }
}

export default function* saga() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest);
  yield takeLatest(AuthTypes.LOGOUT_REQUEST, logoutRequest);
}
