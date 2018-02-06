import { compose, pure, setPropTypes, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import InviteActivation from 'components/InviteActivation';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer, { request } from './ducks';
import saga from './sagas';

const mapsDispatchToProps = {
  onOpen: request,
};

export default compose(
  injectReducer({ key: 'inviteActivation', reducer }),
  injectSaga({ key: 'inviteActivation', saga }),
  connect(null, mapsDispatchToProps),
  setPropTypes({
    onOpen: func.isRequired,
    match: object.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      this.props.onOpen(this.props.match.params);
    },
  }),
  pure
)(InviteActivation);
