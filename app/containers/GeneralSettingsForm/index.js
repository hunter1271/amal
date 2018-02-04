import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import GeneralSettingsFrom from 'components/GeneralSettingsForm';
import { request } from './ducks';
import saga from './sagas';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) =>
    new Promise((resolve, reject) => {
      dispatch(request({ values, resolve, reject }));
    }),
});

export default compose(
  injectSaga({ key: 'generalSettingsForm', saga }),
  connect(null, mapDispatchToProps),
  pure
)(GeneralSettingsFrom);
