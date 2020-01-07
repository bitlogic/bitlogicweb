import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#74C8D2',
      light: '#a7fbff',
      dark: '#4097a1',
      contrastText: '#000000',
    },
    secondary: {
      main: '#759ed1',
      light: '#a7cfff',
      dark: '#4470a0',
      contrastText: '#000000',
    },
    text: {
      primary: '#4097a1',
      secondary: '#4470a0',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
