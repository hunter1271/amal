import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import SignInForm from 'components/SignInForm';
import reducer, { signInRequest } from './ducks';
import saga from './sagas';
import { loadingSelector, errorSelector } from './selectors';

const mapStateToProps = createStructuredSelector({
  loading: loadingSelector,
  errorText: errorSelector,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) =>
    new Promise((resolve, reject) => {
      dispatch(signInRequest({ values, resolve, reject }));
    }),
});

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(SignInForm);
