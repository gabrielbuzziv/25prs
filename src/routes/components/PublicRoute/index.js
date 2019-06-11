import React from 'react';
import { Route } from 'react-router-dom';
import { withLayout } from '~/hocs';

function Public(props) {
  const { component: RenderComponent } = props;

  return <Route render={props => <RenderComponent {...props} />} />;
}

export default withLayout('Public')(Public);
