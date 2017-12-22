import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { MuiThemeProvider } from 'material-ui/styles';
import Button from 'material-ui/Button';

import theme from '../app/theme';

import SignIn from '../app/components/SignIn';
import MainBar from '../app/components/MainBar';

const withTheme = (story) => (
  <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
);

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

storiesOf('Sign In', module)
  .addDecorator(withKnobs)
  .addDecorator(withTheme)
  .add('Sign in form', () => (
    <SignIn processing={boolean('Processing', false)} />
  ));

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withTheme)
  .add('Main bar', () => <MainBar />);
