const breakpoints = [375, 460, 1440];

const paleteColors = {
  // Primary Colors
  white: 'hsl(0, 0%, 100%)',
  brightBlue: 'hsl(220, 98%, 61%)',
  bluePurpleGradient: 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
  // Light Theme Colors
  veryLightGray: 'hsl(0, 0%, 98%)',
  veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
  lightGrayishBlue: 'hsl(233, 11%, 84%)',
  darkGrayishBlue: 'hsl(236, 9%, 61%)',
  veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
  // Dark Theme Colors
  veryDarkBlue: 'hsl(235, 21%, 11%)',
  veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
  lightGrayishBlue2: 'hsl(234, 39%, 85%)',
  darkGrayishBlue2: 'hsl(234, 11%, 52%)',
  veryDarkGrayishBlue2: 'hsl(233, 14%, 35%)',
  veryDarkGrayishBlue3: 'hsl(237, 14%, 26%)',
  black: 'hsl(0, 0%, 0%)'
};

export const colors = {
  //Primary colors
  logoColor: paleteColors.white,
  activeFilterColor: paleteColors.brightBlue,
  caretColor: paleteColors.brightBlue,
  checkBgColor: paleteColors.bluePurpleGradient,
  //Light Theme colors
  lightTheme: {
    textColor: paleteColors.veryDarkGrayishBlue,
    bgColor: paleteColors.veryLightGray,
    taskBgColor: paleteColors.white,
    taskBorder: paleteColors.veryLightGrayishBlue,
    checkboxBorder: paleteColors.veryLightGrayishBlue,
    boxShadowColor: paleteColors.veryLightGrayishBlue,
    completedTaskTextColor: paleteColors.lightGrayishBlue,
    filtersTextColor: paleteColors.darkGrayishBlue,
    filtersBgColor: paleteColors.white
  },
  //Dark Theme colors
  darkTheme: {
    textColor: paleteColors.lightGrayishBlue2,
    bgColor: paleteColors.veryDarkBlue,
    taskBgColor: paleteColors.veryDarkDesaturatedBlue,
    taskBorder: paleteColors.veryDarkGrayishBlue3,
    checkboxBorder: paleteColors.veryDarkGrayishBlue3,
    boxShadowColor: paleteColors.black,
    completedTaskTextColor: paleteColors.veryDarkGrayishBlue2,
    filtersTextColor: paleteColors.veryDarkGrayishBlue2,
    filtersBgColor: paleteColors.veryDarkDesaturatedBlue
  }
};


export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);