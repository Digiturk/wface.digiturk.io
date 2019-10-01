import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Palette, PaletteColor } from "@material-ui/core/styles/createPalette";
import * as React from 'react';
import { WThemeProvider } from '@wface/components';


interface WPalette extends Palette {
  info: PaletteColor;
  success: PaletteColor;
  warning: PaletteColor;
}

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    type: 'light', // dark
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: '#fff'
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: '#fff'
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: '#fff'
    },
    warning: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
      contrastText: '#fff'
    }
  } as WPalette,
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#65819D'
      }
    }
  }
});

export default (props: any) => <WThemeProvider theme={theme} {...props} />