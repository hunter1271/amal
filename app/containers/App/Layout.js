import React from 'react';
import { node, object } from 'prop-types';
import { compose, pure } from 'recompose';
import { withStyles } from 'material-ui/styles';

import MainBar from 'containers/MainBarConnected';
import Sidebar from 'containers/SidebarConnected';

Layout.propTypes = {
  children: node.isRequired,
  classes: object.isRequired,
};

const styles = (theme) => ({
  frame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: '100%',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 10,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

function Layout({ children, classes }) {
  return (
    <div className={classes.frame}>
      <MainBar />
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  );
}

export default compose(withStyles(styles), pure)(Layout);
