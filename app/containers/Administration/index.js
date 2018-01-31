import Administration from 'components/Administration';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { open } from 'containers/InviteForm/ducks';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  handleAddUser: open,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), pure)(
  Administration
);
