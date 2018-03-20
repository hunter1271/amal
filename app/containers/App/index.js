import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from 'containers/Auth';
import UserProfile from 'components/UserProfile';
import Administration from 'containers/Administration';
import InviteActivation from 'containers/InviteActivation';
import Layout from './Layout';

export default function App() {
  return (
    <Switch>
      <Route strict path="/signin" component={Auth} />
      <Route strict path="/activate/:hash" component={InviteActivation} />
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <p>Main</p>} />
          <Route strict path="/profile" component={UserProfile} />
          <Route strict path="/admin" component={Administration} />
        </Switch>
      </Layout>
    </Switch>
  );
}
