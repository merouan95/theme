import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4FAC8F',
    },
    secondary: {
      main: '#F4C94A',
    },
    typography: {
        fontFamily: [
          'Amatic SC',
          'cursive',
        ].join(','),
      },
  },
});
export default theme;