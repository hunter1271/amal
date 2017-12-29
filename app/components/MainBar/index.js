import React from 'react';
import { object, func } from 'prop-types';
import { compose, pure } from 'recompose';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import AccountCircle from 'material-ui-icons/AccountCircle';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 10,
  },
};

MainBar.propTypes = {
  classes: object.isRequired,
  onMenuClick: func,
  onAccountClick: func,
  onSignInClick: func,
  userData: object,
};

MainBar.defaultProps = {
  onMenuClick: () => {},
  onAccountClick: () => {},
  onSignInClick: () => {},
  userData: null,
};

function MainBar({
  classes,
  userData,
  onMenuClick,
  onAccountClick,
  onSignInClick,
}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="contrast"
          aria-label="Menu"
          className={classes.menuButton}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Dashboard
        </Typography>
        <div>
          {userData ? (
            <IconButton color="contrast" onClick={onAccountClick}>
              <AccountCircle />
            </IconButton>
          ) : (
            <Button color="contrast" onClick={onSignInClick}>
              Sign In
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default compose(pure, withStyles(styles))(MainBar);
