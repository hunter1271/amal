import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import InviteForm from 'components/InviteForm';
import { selectOpen } from './selectors';
import reducer, { request, close } from './ducks';
import saga from './sagas';

const mapStateToProps = createStructuredSelector({
  open: selectOpen,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => {
    dispatch(close());
  },
  onSubmit: (values) =>
    new Promise((resolve, reject) =>
      dispatch(request({ values, resolve, reject }))
    ),
});

export default compose(
  injectReducer({ key: 'inviteForm', reducer }),
  injectSaga({ key: 'inviteForm', saga }),
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(InviteForm);
