import React from 'react';
import { compose, pure } from 'recompose';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

function MainBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          Dashboard
        </Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default compose(pure)(MainBar);
