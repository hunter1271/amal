import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  usernameSelector,
  accessTokenSelector,
} from 'containers/SignInConnected/selectors';
import UserDetails from 'components/UserDetails';

const mapStateToProps = createStructuredSelector({
  username: usernameSelector,
  accessToken: accessTokenSelector,
});

export default compose(connect(mapStateToProps), pure)(UserDetails);
