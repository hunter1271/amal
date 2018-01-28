import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InviteForm from 'components/InviteForm';
import { SubmissionError } from 'redux-form';

function InviteFormStory() {
  const timeout = number('timeout', 1000);
  const success = boolean('Success', true);

  const onSubmit = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve();
        } else {
          reject(
            new SubmissionError({
              uemail: 'Some error occured',
              _error: 'Invalid request',
            })
          );
          // throw new SubmissionError({ email: 'Some error occured' });
        }
      }, timeout);
    });

  return <InviteForm open onSubmit={onSubmit} onClose={action('onClose')} />;
}

export default InviteFormStory;
