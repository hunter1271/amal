// @flow
import React from 'react';
import { compose, pure, withProps } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Layout from 'components/Layout';
import UserMenu from 'containers/UserMenu';
import { toggleSidebar } from './ducks';
import { selectSidebarExpand } from './selectors';

const mapStateToProps = createStructuredSelector({
  expand: selectSidebarExpand,
});

const mapDispatchToProps = {
  onToggle: toggleSidebar,
};

export default compose(
  withProps({
    userMenu: <UserMenu />,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(Layout);
