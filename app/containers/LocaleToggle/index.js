import { compose, pure, withProps } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LocaleToggle from 'components/LocaleToggle';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { selectOpen } from './selectors';
import { open, close } from './ducks';
import { appLocales } from '../../i18n';
import messages from './messages';

const mapStateToProps = createStructuredSelector({
  value: makeSelectLocale(),
  open: selectOpen,
});

const mapsDispatchToProps = {
  onOpen: open,
  onClose: close,
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
