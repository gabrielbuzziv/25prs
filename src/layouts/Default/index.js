import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { global as Global } from '~/assets/styles';
import { Container } from './styles';

export default Page =>
  function Auth(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
      if (user === null) {
        dispatch(AuthActions.logoutRequest());
      }
    }, []);

    return (
      <>
        <Global.Styles />
        <Container>
          <div>
            <h1>Posts</h1>

            <Page {...props} />
          </div>
        </Container>
      </>
    );
  };
