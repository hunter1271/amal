import React from 'react';
import { object, node, func } from 'prop-types';
import { compose, pure } from 'recompose';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
// import LocaleToggle from 'containers/LocaleToggle';

MainBar.propTypes = {
  classes: object.isRequired,
  userMenu: node,
  onMenuClick: func,
};

MainBar.defaultProps = {
  onMenuClick: () => {},
  userMenu: null,
  shift: false,
};

const styles = (theme) => ({
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -20,
    marginRight: 20,
  },
});

function MainBar({ classes, userMenu, onMenuClick }) {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={onMenuClick}
          color="inherit"
          aria-label="open drawer"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Dashboard
        </Typography>
        {/* <LocaleToggle color="inherit" /> */}
        {userMenu && <div>{userMenu}</div>}
      </Toolbar>
    </AppBar>
  );
}

export default compose(pure, withStyles(styles))(MainBar);
