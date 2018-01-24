import React from 'react';
// import { object, node, func } from 'prop-types';
import { compose, pure } from 'recompose';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import messages from './messages';

function InviteForm() {
  return (
    <Dialog open aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <FormattedMessage {...messages.title} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormattedMessage {...messages.description} />
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={<FormattedMessage {...messages.emailFieldLabel} />}
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary">
          <FormattedMessage {...messages.cancelAction} />
        </Button>
        <Button color="primary">
          <FormattedMessage {...messages.inviteAction} />
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default compose(pure)(InviteForm);
