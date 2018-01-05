import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-router';

import { MuiThemeProvider } from 'material-ui/styles';
import Button from 'material-ui/Button';

import Auth from '../app/components/Auth';
import MainBar from '../app/components/MainBar';
import UserDetails from '../app/components/UserDetails';
import UserMenu from '../app/components/UserMenu';
import Sidebar from '../app/components/Sidebar';

import theme from '../app/theme';

const withTheme = (story) => (
  <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
);

addDecorator(withTheme);
addDecorator(withKnobs);
addDecorator(StoryRouter());

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

storiesOf('Sign In', module)
  .add('Auth form', () => (
    <Auth
      loading={boolean('Loading', false)}
      errorText={select(
        'Error text',
        [null, 'Invalid credentials', 'Your profile has been blocked'],
        null
      )}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('User details', () => (
    <UserDetails
      firstName={text('First name', 'Ahmad')}
      lastName={text('Last name', 'al Hanbal')}
      username={text('username', 'ahmad@mail.com')}
      accessToken={text('Access token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')}
    />
  ));

storiesOf('Navigation', module)
  .add('Main bar', () => {
    const userMenu = (
      <UserMenu
        signedIn={boolean('Signed in', false)}
        menuOpened={boolean('Open menu', false)}
        signInPath={text('Sign in path', '/signin')}
        accountPath={text('Account path', '/account')}
        onMenuOpen={action('onMenuOpen')}
        onMenuClose={action('onMenuClose')}
        onSignOff={action('onSignOff')}
      />
    );

    const sidebarOpen = boolean('Open sidebar', true);

    return (
      <div>
        <MainBar onMenuClick={action('onMenuClick')} userMenu={userMenu} shift={sidebarOpen} />
        <Sidebar open={sidebarOpen} />
      </div>
    );
  })
  .add('Sidebar', () => (
    <Sidebar open={boolean('Open', true)} onToggle={action('onToggle')} />
  ));
