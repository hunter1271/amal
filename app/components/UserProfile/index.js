import React from 'react';
import { object } from 'prop-types';
import { compose, pure } from 'recompose';
import { withStyles } from 'material-ui/styles';
import GeneralSettingsForm from 'containers/GeneralSettingsForm';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

UserProfile.propTypes = {
  classes: object,
};

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function UserProfile() {
  return (
    <div>
      <GeneralSettingsForm />
      <ExpansionPanel expanded>
        <ExpansionPanelSummary>
          <Typography type="subheading">Change password</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={40}>
            <Grid item md={6} sm={12}>
              <TextField
                id="name"
                label="Name"
                fullWidth
                helperText="Type current password"
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <TextField
                id="name"
                label="Name"
                fullWidth
                helperText="Type new password"
              />
              <TextField
                id="name"
                label="Name"
                fullWidth
                margin="normal"
                helperText="Repeat new password"
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button raised color="primary">
            Change password
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

export default compose(withStyles(styles), pure)(UserProfile);
