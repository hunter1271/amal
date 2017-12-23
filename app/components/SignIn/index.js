import React from 'react';
import { object, bool } from 'prop-types';
import { compose, pure } from 'recompose';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles, withTheme } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
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

SignIn.propTypes = {
  processing: bool,
  classes: object.isRequired,
};

SignIn.defaultProps = {
  processing: false,
};

function SignIn({ processing, classes }) {
  return (
    <Dialog open className={classes.root}>
      <DialogTitle className={classes.dialogTitle} disableTypography>
        <Typography className={classes.dialogTitleTypography} type="headline">
          Welcome back
        </Typography>
      </DialogTitle>
      <LinearProgress
        mode={processing ? 'indeterminate' : 'determinate'}
        value={100}
      />
      <DialogContent>
        <TextField
          className={classes.textField}
          autoFocus
          id="email"
          label="Email"
          type="email"
          fullWidth
          disabled={processing}
        />
        <TextField
          className={classes.textField}
          id="password"
          label="Password"
          type="password"
          fullWidth
          disabled={processing}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          disabled={processing}
          raised
          color="primary"
          className={classes.button}
        >
          Sign In
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default compose(pure, withTheme(), withStyles(styles))(SignIn);
