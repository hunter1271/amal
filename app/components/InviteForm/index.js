import React from 'react';
import { object, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import { TextField } from 'redux-form-material-ui';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';
import { isEmail, isRequired } from 'utils/validators';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { withStyles } from 'material-ui/styles';

import messages from './messages';

// const renderField = (props) => (
//   // console.log(props);
//   <TextField {...props} />
// );

InviteForm.propTypes = {
  open: bool,
  submitting: bool,
  invalid: bool,
  submitFailed: bool,
  classes: object.isRequired,
  onSubmit: func.isRequired,
  handleSubmit: func.isRequired,
  onClose: func,
  error: string,
};

const styles = () => ({
  wrapper: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -13,
    marginLeft: -13,
  },
});

function InviteForm({
  submitting,
  invalid,
  submitFailed,
  classes,
  onSubmit,
  handleSubmit,
  onClose,
  error,
  open,
}) {
  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <FormattedMessage {...messages.title} />
        <br />
        {submitFailed && 'submitFailed'}
        <br />
        {error}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormattedMessage {...messages.description} />
        </DialogContentText>
        <Field
          name="uemail"
          component={TextField}
          autoFocus
          label={<FormattedMessage {...messages.emailFieldLabel} />}
          type="email"
          fullWidth
          disabled={submitting}
          validate={[isRequired, isEmail]}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" disabled={submitting} onClick={onClose}>
          <FormattedMessage {...messages.cancelAction} />
        </Button>
        <div className={classes.wrapper}>
          <Button
            color="primary"
            disabled={submitting || invalid}
            onClick={handleSubmit(onSubmit)}
          >
            <FormattedMessage {...messages.inviteAction} />
          </Button>
          {submitting && (
            <CircularProgress size={26} className={classes.progress} />
          )}
        </div>
      </DialogActions>
    </Dialog>
  );
}

const valueSelector = formValueSelector('form/inviteUser');
const withConnect = connect((state) => ({ ...valueSelector(state, 'email') }));

export default compose(
  withConnect,
  withStyles(styles),
  reduxForm({
    form: 'form/inviteUser',
  }),
  pure
)(InviteForm);
