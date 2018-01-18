import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-router';
import createHistory from 'history/createBrowserHistory';

import { MuiThemeProvider } from 'material-ui/styles';
import Button from 'material-ui/Button';

import SignInForm from '../app/components/SignInForm';
import MainBar from '../app/components/MainBar';
import UserDetails from '../app/components/UserDetails';
import UserMenu from '../app/components/UserMenu';
import Sidebar from '../app/components/Sidebar';
import configureStore from '../app/configureStore';
import LocaleToggle from '../app/components/LocaleToggle';

import theme from '../app/theme';

import UserListStory from './UserListStory';

const withTheme = (story) => (
  <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
);

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const withStore = (story) => <Provider store={store}>{story()}</Provider>;

addDecorator(withTheme);
addDecorator(withKnobs);
addDecorator(StoryRouter());
addDecorator(withStore);

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

storiesOf('Auth', module)
  .add('SignInForm', () => (
    <SignInForm
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
        <MainBar
          onMenuClick={action('onMenuClick')}
          userMenu={userMenu}
          shift={sidebarOpen}
        />
        <Sidebar open={sidebarOpen} />
      </div>
    );
  })
  .add('Sidebar', () => (
    <Sidebar open={boolean('Open', true)} onToggle={action('onToggle')} />
  ))
  .add('Locale toggle', () => (
    <LocaleToggle
      value={select('Current locale', ['eng', 'tat', 'ru'], 'eng')}
      options={['eng', 'tat', 'ru']}
      messages={{ eng: 'English', tat: 'Tatar', ru: 'Russian' }}
      open={boolean('Open', true)}
      onChange={action('onToggle')}
      onOpen={action('onOpen')}
      onClose={action('onClose')}
    />
  ));

storiesOf('Admin', module).add('User list', UserListStory);
