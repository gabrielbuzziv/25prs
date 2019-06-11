import React from 'react';

import { global as Global } from '~/assets/styles';
import { Container } from './styles';

export default Page =>
  function Auth(props) {
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
