import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Login, Profile, NotFound, Home, Vote } from './pages';
import { Admin, UsersProfile } from './pages/admin';

const App = withRouter(() => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/голосование" component={Vote} />
      <Route path="/вход" component={Login} />
      <Route path="/профиль" component={Profile} />
      <Route path="/пользователь/:userId" component={UsersProfile} />

      <Route path="/админ" component={Admin} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
});

export default App;
