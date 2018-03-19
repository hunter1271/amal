import { compose, pure, withProps } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signedInSelector } from 'containers/Auth/selectors';
import UserMenu from 'components/UserMenu';
import { withRouter } from 'react-router';
import { signOff } from 'containers/Auth/ducks';
import { userMenuOpen, userMenuClose } from './ducks';
import { openedSelector } from './selectors';

const mapStateToProps = createStructuredSelector({
  signedIn: signedInSelector,
  menuOpened: openedSelector,
});

const initWithProps = withProps(({ match }) => ({
  signInPath: `${match.url}signin`,
  accountPath: `${match.url}profile`,
}));

const mapDispatchToProps = {
  onMenuOpen: userMenuOpen,
  onMenuClose: userMenuClose,
  onSignOff: signOff,
};

export default compose(
  withRouter,
  initWithProps,
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(UserMenu);
