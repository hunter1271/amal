import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

// import 'typeface-roboto';

// Create MUI theme
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
