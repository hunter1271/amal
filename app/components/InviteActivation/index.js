import React from 'react';
import { compose, pure } from 'recompose';
import { FormattedMessage } from 'react-intl';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';

import messages from './messages';

function SignUpForm() {
  return (
    <Dialog open>
      <DialogTitle>{<FormattedMessage {...messages.title} />}</DialogTitle>
      <DialogContent />
    </Dialog>
  );
}

export default compose(pure)(SignUpForm);
