import React from 'react';
import { object } from 'prop-types';
import { compose, pure } from 'recompose';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import UserList from 'components/UserList';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
});

Configuration.propTypes = {
  classes: object,
};

function Configuration({ classes }) {
  return (
    <Paper>
      <AppBar position="static" color="default">
        <Tabs value={0} indicatorColor="primary" textColor="primary" fullWidth>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>

      <UserList />
      <Button fab className={classes.fab} color="primary">
        <AddIcon />
      </Button>
    </Paper>
  );
}

export default compose(withStyles(styles), pure)(Configuration);
