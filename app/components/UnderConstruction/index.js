import React from 'react';
import { compose, pure } from 'recompose';
import Typography from 'material-ui/Typography';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function UnderConstruction() {
  return (
    <Typography align="center" paragraph type="display2">
      <FormattedMessage {...messages.header} />
    </Typography>
  );
}

export default compose(pure)(UnderConstruction);
