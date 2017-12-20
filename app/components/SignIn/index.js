import React from 'react';
import { compose, pure } from 'recompose';
import { Button } from 'material-ui';

function SignIn() {
  return (
    <Button raised color="primary">
      Button
    </Button>
  );
}

export default compose(pure)(SignIn);
