import React from 'react';
import { compose, pure } from 'recompose';
import { array, bool, func, object } from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Language from 'material-ui-icons/Language';
import { Manager, Target, Popper } from 'react-popper';
import { MenuItem, MenuList } from 'material-ui/Menu';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Paper from 'material-ui/Paper';
import Grow from 'material-ui/transitions/Grow';

LocaleToggle.propTypes = {
  options: array.isRequired,
  messages: object,
  open: bool,
  onMenuOpen: func.isRequired,
  onMenuClose: func.isRequired,
  onChange: func.isRequired,
};

LocaleToggle.defaultProps = {
  menuOpened: false,
};

function LocaleToggle({
  options,
  messages,
  onMenuOpen,
  onMenuClose,
  open,
  onChange,
}) {
  return (
    <Manager>
      <Target>
        <IconButton
          // color="contrast"
          onClick={onMenuOpen}
          aria-owns={open ? 'locale-menu' : null}
          aria-haspopup="true"
        >
          <Language />
        </IconButton>
      </Target>
      <Popper placement="bottom-start" eventsEnabled={open}>
        <ClickAwayListener onClickAway={onMenuClose}>
          <Grow in={open}>
            <Paper id="locale-menu">
              <MenuList role="menu" onClick={onMenuClose}>
                {options &&
                  options.map((option) => (
                    <MenuItem onClick={() => onChange(option)}>
                      {messages[option]}
                    </MenuItem>
                  ))}
              </MenuList>
            </Paper>
          </Grow>
        </ClickAwayListener>
      </Popper>
    </Manager>
  );
}

export default compose(pure)(LocaleToggle);
