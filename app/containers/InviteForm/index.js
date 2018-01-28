import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import InviteForm from 'components/InviteForm';
import { selectOpen } from './selectors';
import reducer, { inviteFormRequest } from './ducks';
import saga from './sagas';

const mapStateToProps = createStructuredSelector({
  open: selectOpen,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) =>
    new Promise((resolve, reject) =>
      dispatch(inviteFormRequest({ values, resolve, reject }))
    ),
});

export default compose(
  injectReducer({ key: 'inviteForm', reducer }),
  injectSaga({ key: 'inviteForm', saga }),
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(InviteForm);
