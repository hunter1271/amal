import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignInForm from 'components/SignInForm';
import { signInRequest } from './ducks';
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

export default compose(
  // withReducer,
  // withSaga,
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(SignInForm);
