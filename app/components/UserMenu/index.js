import React from 'react';
import { bool, string, func } from 'prop-types';
import { compose, pure } from 'recompose';
import { NavLink, Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import { Manager, Target, Popper } from 'react-popper';
import { MenuItem, MenuList } from 'material-ui/Menu';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Paper from 'material-ui/Paper';

UserMenu.propTypes = {
  signedIn: bool,
  signInPath: string.isRequired,
  accountPath: string.isRequired,
  onMenuOpen: func.isRequired,
  menuOpened: bool,
  onMenuClose: func.isRequired,
};

UserMenu.defaultProps = {
  signedIn: false,
  menuOpened: false,
};

function UserMenu({
  signedIn,
  signInPath,
  accountPath,
  onMenuOpen,
  menuOpened,
  onMenuClose,
}) {
  if (signedIn) {
    return (
      <Manager>
        <Target>
          <IconButton
            color="contrast"
            onClick={onMenuOpen}
            aria-owns={menuOpened ? 'user-menu' : null}
            aria-haspopup="true"
          >
            <AccountCircle />
          </IconButton>
        </Target>
        <Popper placement="bottom-start" eventsEnabled={menuOpened}>
          <ClickAwayListener onClickAway={onMenuClose}>
            <Paper id="user-menu">
              <MenuList role="menu">
                <MenuItem component={NavLink} to={accountPath}>
                  My account
                </MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </Manager>
    );
  }

  return (
    <Button color="contrast" to={signInPath} component={Link}>
      Sign In
    </Button>
  );
}

export default compose(pure)(UserMenu);
