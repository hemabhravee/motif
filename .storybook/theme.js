const { createMuiTheme, responsiveFontSizes } = require('@material-ui/core');

const theme = createMuiTheme(
  responsiveFontSizes({
    palette: {
      primary: {
        light: '#4cc9f0',
        main: '#4361ee',
        dark: '#3a0ca3',
        contrastText: '#ecdbeb'
      },
      secondary: {
        light: '#eed3da',
        main: '#feb6c8',
        dark: '#dd3b69',
        contrastText: '#393243'
      },
      info: {
        light: '#95d8f2',
        main: '#33b5e5',
        dark: '#093044',
        contrastText: '#f1ddd3'
      },
      success: {
        light: '#c7f9cc',
        main: '#80ed99',
        dark: '#57cc99',
        contrastText: '#121212'
      },
      error: {
        light: '#f24073',
        main: '#d20f46',
        dark: '#86092c',
        contrastText: '#f1ddd3'
      },
      warning: {
        light: '#ffeb89',
        main: '#ffd74a',
        dark: '#ffb921',
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
