const { createMuiTheme, responsiveFontSizes } = require('@material-ui/core');

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      brand:{
        one: "#6aeebe",
        two: "#121c68",
        three: "#e9f7d1",
        four: "#feb9b0"
      },
      primary: {
        light: '#7596ff',
        main: '#3369e7',
        dark: '#003fb4',
        contrastText: '#fffafa'
      },
      secondary: {
        light: '#ff7dc4',
        main: '#eb4894',
        dark: '#b40066',
        contrastText: '#393243'
      },
      info: {
        light: '#75e7ff',
        main: '#33b5e5',
        dark: '#0085b3',
        contrastText: '#f1ddd3'
      },
      success: {
        light: '#b4ffca',
        main: '#80ed99',
        dark: '#4cba6a',
        contrastText: '#121212'
      },
      error: {
        light: '#ff5571',
        main: '#d20f46',
        dark: '#990020',
        contrastText: '#f1ddd3'
      },
      warning: {
        light: '#ffff7d',
        main: '#ffd74a',
        dark: '#c8a608',
        contrastText: '#121212'
      },
      contrastThreshold: 3.5
    },
    typography: {
      brand: {
        primary: 'Manrope',
        secondary: 'Inter'
      }
    }
  })
);

export default theme;
