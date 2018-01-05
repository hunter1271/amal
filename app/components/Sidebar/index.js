import React from 'react';
import { compose, pure } from 'recompose';
import { bool, object } from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Inbox, Drafts, Settings } from 'material-ui-icons';

Sidebar.propTypes = {
  open: bool,
  classes: object.isRequired,
};

Sidebar.defaultProps = {
  open: false,
};

const styles = (theme) => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: theme.sidebar.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperNarrow: {
    width: theme.sidebar.narrowWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    width: theme.sidebar.width - 1,
  },
  drawerHeader: {
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  buttonNarrow: {
    width: theme.sidebar.narrowWidth,
  },
});

function Sidebar({ open, classes }) {
  return (
    <Drawer
      open={open}
      type="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperNarrow
        ),
      }}
    >
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader} />
        <List>
          <ListItem button className={!open && classes.buttonNarrow}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button className={!open && classes.buttonNarrow}>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <Divider />
          <ListItem button className={!open && classes.buttonNarrow}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default compose(withStyles(styles, { withTheme: true }), pure)(Sidebar);
