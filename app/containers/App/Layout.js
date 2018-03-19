// @flow
import { compose, pure, withProps } from 'recompose';
import Layout from 'components/Layout';
import UserMenu from 'containers/UserMenu';

export default compose(
  withProps({
    userMenu: UserMenu,
  }),
  pure
)(Layout);
