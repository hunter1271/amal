import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InviteForm from 'components/InviteForm';
import { SubmissionError } from 'redux-form/immutable';

function InviteFormStory() {
  const timeout = number('timeout', 1000);
  const fail = boolean('Fail', true);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = () =>
    sleep(timeout).then(() => {
      if (fail) {
        throw new SubmissionError({
          email: 'Some error with email',
        });
      }
    });

  return <InviteForm open onSubmit={onSubmit} onClose={action('onClose')} />;
}

export default InviteFormStory;
