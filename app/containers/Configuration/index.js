import React from 'react';
import { object } from 'prop-types';
import { compose, pure } from 'recompose';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import { Link, NavLink, Switch, Route, withRouter } from 'react-router-dom';
import UserList from 'components/UserList';
import UnderConstruction from 'components/UnderConstruction';
import InviteForm from 'components/InviteForm';
import Zoom from 'material-ui/transitions/Zoom';

const styles = (theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
});

Configuration.propTypes = {
  classes: object.isRequired,
  match: object.isRequired,
  location: object.isRequired,
};

function Configuration({ classes, match, location }) {
  return (
    <Paper>
      <AppBar position="static" color="default">
        <Tabs
          value={location.pathname}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab
            label="Users"
            component={NavLink}
            to={`${match.url}/users`}
            value={`${match.url}/users`}
          />
          <Tab
            label="Departaments"
            component={NavLink}
            to={`${match.url}/deps`}
            value={`${match.url}/deps`}
          />
          <Tab
            label="Products"
            component={NavLink}
            to={`${match.url}/products`}
            value={`${match.url}/products`}
          />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path={`${match.url}/users`} component={UserList} />
        <Route exact path={`${match.url}/deps`} component={UnderConstruction} />
        <Route
          exact
          path={`${match.url}/products`}
          component={UnderConstruction}
        />
      </Switch>
      <Route exact path={`${match.url}/users/invite`} component={InviteForm} />
      <Switch>
        <Route exact path={`${match.url}/users`}>
          <Zoom in timeout={500}>
            <Button
              fab
              className={classes.fab}
              color="primary"
              component={Link}
              to={`${match.url}/users/invite`}
            >
              <AddIcon />
            </Button>
          </Zoom>
        </Route>
        <Route exact path={`${match.url}/deps`} />
        <Route exact path={`${match.url}/products`} />
      </Switch>
    </Paper>
  );
}

export default compose(withStyles(styles), withRouter, pure)(Configuration);
