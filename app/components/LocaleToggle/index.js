import React from 'react';
import { compose, pure } from 'recompose';
import { array, bool, func, object, string } from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Language from 'material-ui-icons/Language';
import { Manager, Target, Popper } from 'react-popper';
import { MenuItem, MenuList } from 'material-ui/Menu';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Paper from 'material-ui/Paper';
import Grow from 'material-ui/transitions/Grow';

LocaleToggle.propTypes = {
  value: string,
  options: array.isRequired,
  messages: object,
  open: bool,
  onOpen: func.isRequired,
  onClose: func.isRequired,
  onChange: func.isRequired,
};

LocaleToggle.defaultProps = {
  menuOpened: false,
};

function LocaleToggle({
  value,
  options,
  messages,
  onOpen,
  onClose,
  open,
  onChange,
  ...props
}) {
  return (
    <Manager>
      <Target>
        <IconButton
          {...props}
          onClick={onOpen}
          aria-owns={open ? 'locale-menu' : null}
          aria-haspopup="true"
        >
          <Language />
        </IconButton>
      </Target>
      <Popper placement="bottom-start" eventsEnabled={open}>
        <ClickAwayListener onClickAway={onClose}>
          <Grow in={open}>
            <Paper id="locale-menu">
              <MenuList role="menu" onClick={onClose}>
                {options &&
                  options.map((option) => (
                    <MenuItem
                      selected={option === value}
                      onClick={() => onChange(option)}
                    >
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
