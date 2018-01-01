import React from 'react';
import { compose, pure, withProps } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  signedInSelector,
  userDataSelector,
} from 'containers/AuthConnected/selectors';
import MainBar from 'components/MainBar';
import UserMenu from 'containers/UserMenuConnected';

const mapsStateToProps = createStructuredSelector({
  signedIn: signedInSelector,
  userData: userDataSelector,
});

const mapDispatchToProps = () => ({
  onMenuClick: () => {},
});

export default compose(
  connect(mapsStateToProps, mapDispatchToProps),
  withProps({ userMenu: <UserMenu /> }),
  pure
)(MainBar);
