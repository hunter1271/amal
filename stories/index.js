import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from 'material-ui/Button';

import SignIn from '../app/components/SignIn';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

storiesOf('Sign In', module)
  .addDecorator((story) => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('Sign in form', () => <SignIn />);
