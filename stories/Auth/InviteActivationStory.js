import React from 'react';
import InviteActivation from 'components/InviteActivation';
import { select } from '@storybook/addon-knobs';

function InviteActivationStory() {
  return (
    <InviteActivation
      error={select('Error', ['', 'Ivitation link expired'], null)}
    />
  );
}

export default InviteActivationStory;
