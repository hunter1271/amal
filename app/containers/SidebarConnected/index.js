import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Sidebar from 'components/Sidebar';
import { openSelector } from './selectors';

const mapStateToProps = createStructuredSelector({
  open: openSelector,
});

export default compose(connect(mapStateToProps), pure)(Sidebar);
