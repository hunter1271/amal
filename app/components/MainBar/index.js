import React from 'react';
import { object, func, node } from 'prop-types';
import { compose, pure } from 'recompose';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';

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
  userMenu: node,
};

MainBar.defaultProps = {
  onMenuClick: () => {},
  userMenu: null,
};

function MainBar({ classes, onMenuClick, userMenu }) {
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
        {userMenu && <div>{userMenu}</div>}
      </Toolbar>
    </AppBar>
  );
}

export default compose(pure, withStyles(styles))(MainBar);
