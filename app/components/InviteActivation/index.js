import React from 'react';
import { string, object } from 'prop-types';
import { compose, pure } from 'recompose';
import { FormattedMessage } from 'react-intl';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogContentText,
} from 'material-ui/Dialog';
import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

import messages from './messages';

InviteActivation.propTypes = {
  error: string,
  classes: object.isRequired,
};

InviteActivation.defaultProps = {
  error: null,
};

const styles = () => ({
  content: {
    minWidth: '450px',
  },
});

function InviteActivation({ classes, error }) {
  return (
    <Dialog open>
      <DialogTitle>{<FormattedMessage {...messages.title} />}</DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>
          {error || <LinearProgress variant="query" />}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default compose(withStyles(styles), pure)(InviteActivation);
