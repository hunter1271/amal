import React from 'react';
import { string } from 'prop-types';
import { compose, pure } from 'recompose';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

UserDetails.propTypes = {
  username: string.isRequired,
  firstName: string,
  lastName: string,
  accessToken: string.isRequired,
};

UserDetails.defaultProps = {
  firstName: null,
  lastName: null,
};

function UserDetails({ username, firstName, lastName, accessToken }) {
  return (
    <Card>
      <CardContent>
        <Typography type="title" gutterBottom>
          {firstName} {lastName}
        </Typography>
        <Typography type="subheading">Username: {username}</Typography>
        <Typography type="subheading">Access token: {accessToken}</Typography>
      </CardContent>
    </Card>
  );
}

export default compose(pure)(UserDetails);
