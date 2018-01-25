import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import InviteForm from 'components/InviteForm';

function InviteFormStory() {
  return (
    <InviteForm
      open
      onSubmit={action('onSubmit')}
      error={text('Error', null)}
    />
  );
}

export default InviteFormStory;
