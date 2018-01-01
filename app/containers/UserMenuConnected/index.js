import { compose, pure, withProps } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signedInSelector } from 'containers/AuthConnected/selectors';
import UserMenu from 'components/UserMenu';
import { withRouter } from 'react-router';

const mapStateToProps = createStructuredSelector({
  signedIn: signedInSelector,
});

const initWithProps = withProps(({ match }) => ({
  signInPath: `${match.url}signin`,
  accountPath: `${match.url}account`,
}));

export default compose(
  withRouter,
  initWithProps,
  connect(mapStateToProps),
  pure
)(UserMenu);
