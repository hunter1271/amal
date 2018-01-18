import { compose, pure, withProps } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LocaleToggle from 'components/LocaleToggle';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { selectOpen } from './selectors';
import { toggleOpen } from './ducks';
import { appLocales } from '../../i18n';
import messages from './messages';

const mapStateToProps = createStructuredSelector({
  open: selectOpen,
});

const mapsDispatchToProps = {
  onOpen: toggleOpen,
  onClose: toggleOpen,
  onChange: changeLocale,
};

export default compose(
  withProps({
    options: appLocales,
    messages,
  }),
  connect(mapStateToProps, mapsDispatchToProps),
  pure
)(LocaleToggle);
