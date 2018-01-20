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
import { injectIntl, intlShape } from 'react-intl';

LocaleToggle.propTypes = {
  value: string,
  options: array.isRequired,
  messages: object,
  open: bool,
  onOpen: func.isRequired,
  onClose: func.isRequired,
  onChange: func.isRequired,
  intl: intlShape.isRequired,
};

LocaleToggle.defaultProps = {
  open: false,
};

function LocaleToggle({
  value,
  options,
  messages,
  onOpen,
  onClose,
  open,
  onChange,
  intl,
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
      <Popper placement="bottom" eventsEnabled={open}>
        <ClickAwayListener onClickAway={onClose}>
          <Grow in={open}>
            <Paper id="locale-menu">
              <MenuList role="menu" onClick={onClose}>
                {options &&
                  options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === value}
                      onClick={() => onChange(option)}
                    >
                      {intl.formatMessage(messages[option])}
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

export default compose(injectIntl, pure)(LocaleToggle);
