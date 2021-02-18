import { css } from '@emotion/react';

const breakpoints = [375, 460, 1440];

export const colors = {
  primary: {
    white: 'hsl(0, 0%, 100%)',
    brightBlue: 'hsl(220, 98%, 61%)',
    checkBackground: 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
  },
  lightTheme: {
    veryLightGray: 'hsl(0, 0%, 98%)',
    veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
    lightGrayishBlue: 'hsl(233, 11%, 84%)',
    darkGrayishBlue: 'hsl(236, 9%, 61%)',
    veryDarkGrayishBlue: 'hsl(235, 19%, 35%)'
  },
  darkTheme: {
    veryDarkBlue: 'hsl(235, 21%, 11%)',
    veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
    lightGrayishBlue: 'hsl(234, 39%, 85%)',
    lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
    darkGrayishBlue: 'hsl(234, 11%, 52%)',
    veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
    veryDarkGrayishBlue2: 'hsl(237, 14%, 26%)'
  }
};


export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

export const app = css`
  background-color: ${colors.lightTheme.veryLightGray};
  color: ${colors.lightTheme.veryDarkGrayishBlue};
`;