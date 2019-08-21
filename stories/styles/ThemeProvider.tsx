const defaultTheme = {
  fontFamily: '"Open Sans", Calibri, Helvetica, Tahoma, sans-serif',

  fontSizes: {
    paragraph: '12px',

    headerOne: '55px',
    headerTwo: '18px',
    logoHeader: '25px',
    subHeader: '32px',

    headerMobile: {
      headerOne: '35px',
      headerTwo: '16px',
      logoHeader: '25px',
      subHeader: '24px'
    }
  },

  fontWeights: {
    normal: 300,
    bold: 600
  },

  fontColor: {
    one: '#0f2035',
    two: '#ffffff',
    three: '#179ce4',
    four: '#aaaaaa'
  },

  identityColors: {
    one: '#179ce4',
    two: '#2ac4ea',
    three: '#9b9b9b',
    four: '#dddddd',
    five: '#eeeeee',
    six: '#8AC143',
    seven: 'red'
  },

  borderRadius: '6px',
  iconSize: '25px',

  gutters: {
    tiny: '5px',
    small: '10px',
    medium: '15px',
    large: '20px',
    extraLarge: '25px'
  }
}

export { defaultTheme as theme }
