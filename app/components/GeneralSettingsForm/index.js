import React from 'react';
import { bool, func, object } from 'prop-types';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import { TextField } from 'redux-form-material-ui';
import { CircularProgress } from 'material-ui/Progress';
import { isRequired } from 'utils/validators';
import { reduxForm, Field, formValueSelector } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

GeneralSettingsForm.propTypes = {
  submitting: bool,
  invalid: bool,
  pristine: bool,
  onSubmit: func,
  handleSubmit: func,
  classes: object,
};

const styles = {
  wrapper: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -13,
    marginLeft: -13,
  },
};

function GeneralSettingsForm({
  submitting,
  invalid,
  pristine,
  handleSubmit,
  onSubmit,
  classes,
}) {
  return (
    <ExpansionPanel expanded>
      <ExpansionPanelSummary>
        <Typography variant="subheading">
          <FormattedMessage {...messages.title} />
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={40}>
          <Grid item md={4} sm={12}>
            <Field
              name="lastName"
              component={TextField}
              label={<FormattedMessage {...messages.lastName} />}
              type="text"
              disabled={submitting}
              fullWidth
              required
              validate={[isRequired]}
              helperText=" "
            />
          </Grid>
          <Grid item md={4} sm={12}>
            <Field
              name="firstName"
              component={TextField}
              label={<FormattedMessage {...messages.firstName} />}
              type="text"
              disabled={submitting}
              fullWidth
              required
              validate={[isRequired]}
            />
          </Grid>
          <Grid item md={4} sm={12}>
            <Field
              name="middleName"
              component={TextField}
              label={<FormattedMessage {...messages.middleName} />}
              type="text"
              disabled={submitting}
              fullWidth
              required
              validate={[isRequired]}
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <div className={classes.wrapper}>
          <Button
            variant="raised"
            color="primary"
            disabled={submitting || pristine || invalid}
            onClick={handleSubmit(onSubmit)}
          >
            <FormattedMessage {...messages.update} />
          </Button>
          {submitting && (
            <CircularProgress size={26} className={classes.progress} />
          )}
        </div>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
}

const selectValues = formValueSelector('generalSettingsForm');

export default compose(
  withStyles(styles),
  connect((state) => ({
    ...selectValues(state, 'lastName', 'firstName', 'middleName'),
  })),
  reduxForm({
    form: 'generalSettingsForm',
  }),
  pure
)(GeneralSettingsForm);
