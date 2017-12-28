import React from 'react';
import { object, bool, func, string } from 'prop-types';
import { compose, pure } from 'recompose';
import TextField from 'material-ui/TextField';
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

Auth.propTypes = {
  loading: bool,
  classes: object.isRequired,
  onSubmit: func.isRequired,
  errorText: string,
};

Auth.defaultProps = {
  loading: false,
  errorText: null,
};

function Auth({ loading, classes, onSubmit, errorText }) {
  return (
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
        <TextField
          error={!!errorText}
          className={classes.textField}
          autoFocus
          id="email"
          label="Email"
          type="email"
          fullWidth
          disabled={loading}
        />
        <TextField
          error={!!errorText}
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
          onClick={onSubmit}
        >
          Sign In
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default compose(pure, withTheme(), withStyles(styles))(Auth);
