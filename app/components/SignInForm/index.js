import React from 'react';
import { connect } from 'react-redux';
import { object, bool, func, string } from 'prop-types';
import { compose, pure } from 'recompose';
import {
  Field,
  reduxForm,
  Form,
  formValueSelector,
} from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button';
import { withStyles, withTheme } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';

const styles = (theme) => ({
  root: {
    minWidth: '300px',
  },
  dialogTitle: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit,
    backgroundColor: theme.palette.primary[500],
  },
  dialogTitleTypography: {
    color: 'white',
  },
  dialogActions: {
    marginRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
  },
  button: {},
  input: {
    display: 'none',
  },
  textField: {
    marginTop: theme.spacing.unit * 2,
  },
});

SignInForm.propTypes = {
  loading: bool,
  classes: object.isRequired,
  onSubmit: func.isRequired,
  errorText: string,
};

SignInForm.defaultProps = {
  loading: false,
  errorText: null,
};

function SignInForm({ loading, classes, onSubmit, errorText }) {
  return (
    <Form onSubmit={onSubmit}>
      <Dialog open className={classes.root}>
        <DialogTitle className={classes.dialogTitle} disableTypography>
          <Typography className={classes.dialogTitleTypography} type="headline">
            Welcome back
          </Typography>
        </DialogTitle>
        <LinearProgress
          mode={loading ? 'indeterminate' : 'determinate'}
          value={100}
        />
        <DialogContent>
          {errorText && <DialogContentText>{errorText}</DialogContentText>}
          <Field
            name="email"
            component={TextField}
            className={classes.textField}
            autoFocus
            label="Email"
            type="email"
            fullWidth
            disabled={loading}
          />
          <Field
            name="password"
            component={TextField}
            className={classes.textField}
            id="password"
            label="Password"
            type="password"
            fullWidth
            disabled={loading}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            disabled={loading}
            raised
            color="primary"
            className={classes.button}
            type="submit"
          >
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </Form>
  );
}

const valueSelector = formValueSelector('form/signIn');
const withConnect = connect((state) =>
  valueSelector(state, 'email', 'password')
);

export default compose(
  withConnect,
  withTheme(),
  withStyles(styles),
  reduxForm({
    form: 'form/signIn',
  }),
  pure
)(SignInForm);
