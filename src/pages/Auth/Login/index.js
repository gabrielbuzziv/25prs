import React, { useEffect } from 'react';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { Loading } from '~/components';
import { Container, Title, Button, Form, Buttons } from './styles';

const schema = Yup.object().shape({
  username: Yup.string().required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

function Login() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.login);

  async function handleSubmit(data) {
    dispatch(AuthActions.loginRequest(data));
  }

  return (
    <Container>
      <Title>Login</Title>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Input name="username" placeholder="Usuário" autoComplete="off" />
        </Form.Field>

        <Form.Field>
          <Form.Input name="password" type="password" placeholder="Senha" />
        </Form.Field>

        <Buttons>
          <Button disabled={login.loading}>{login.loading ? <Loading type="button" /> : 'Login'}</Button>
        </Buttons>
      </Form>
    </Container>
  );
}

export default Login;
