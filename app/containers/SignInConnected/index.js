import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import SignIn from 'components/SignIn';
import reducer, { signInRequest } from './ducks';
import saga from './sagas';
import { loadingSelector, errorSelector } from './selectors';

const mapStateToProps = createStructuredSelector({
  loading: loadingSelector,
  errorText: errorSelector,
});

const mapDispatchToProps = {
  onSubmit: signInRequest,
};

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(SignIn);
