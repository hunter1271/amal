import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { userDataSelector } from 'containers/AuthConnected/selectors';
import MainBar from 'components/MainBar';

const mapsStateToProps = createStructuredSelector({
  userData: userDataSelector,
});

const mapDispatchToProps = (dispatch) => ({
  onMenuClick: () => {},
  onAccountClick: () => {},
  onSignInClick: () => dispatch(push('/signin')),
});

export default compose(connect(mapsStateToProps, mapDispatchToProps), pure)(
  MainBar
);
