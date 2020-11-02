// tailwind.config.js

module.exports = {
  theme: {
    colors: {
      black: '#616266',
      white: '#ffffff',
      orange: {
        lighter: '#fee3dd',
        light: '#fcac98',
        default: '#fa7454',
        dark: '#c85e43',
        darker: '#642f22',
      },
      blue: {
        lighter: '#d9eefc',
        light: '#80c7f5',
        default: '#669fc4',
        dark: '#4d7793',
        darker: '#335062',
      },
      red: {
        lighter: '#fdecec',
        light: '#f79ca6',
        default: '#e84545',
        dark: '#ba3737',
        darker: '#5d1b1b',
      },
      green: {
        lighter: '#d7f2e8',
        light: '#86d8b9',
        default: '#06ba77',
        dark: '#2d966f',
        darker: '#173630',
      },
      purple: {
        lighter: '#f3e9ff',
        light: '#cfa5ff',
        default: '#b779ff',
        dark: '#871fff',
        darker: '#441080',
      },
      teal: {
        lighter: '#dbf3f6',
        light: '#94dbe4',
        default: '#4cc3d2',
        dark: '#00848e',
        darker: '#003136',
      },
      yellow: {
        lighter: '#fff8c0',
        light: '#ffe82e',
        default: '#ffc100',
        dark: '#9d7005',
        darker: '#583b00',
      },
      indigo: {
        lighter: '#f7d3ec',
        light: '#eb90ce',
        default: '#d6219c',
        dark: '#ab197d',
        darker: '#560d3d',
      },
      grey: {
        lighter: '#f3f3f5',
        light: '#e1e2e6',
        default: '#c2c4cc',
        dark: '#9b9da3',
        darker: '#616266',
      },
      aqua: {
        lighter: '#d0e7f1',
        light: '#9ccde2',
        default: '#3298c4',
        dark: '#0070a1',
        darker: '#035879',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
