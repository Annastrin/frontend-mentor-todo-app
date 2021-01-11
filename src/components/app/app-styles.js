import { css } from '@emotion/react';
import bgDesktopLight from './images/bg-desktop-light.jpg';
import bgMobileLight from './images/bg-mobile-light.jpg';
import bgDesktopDark from './images/bg-desktop-dark.jpg';
import bgMobileDark from './images/bg-mobile-dark.jpg';

const breakpoints = [375, 460, 1440];

export const colors = {
  primary: {
    white: 'hsl(0, 0%, 100%)',
    brightBlue: 'hsl(220, 98%, 61%)',
    checkBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)'
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
  min-height: 200px;
  padding: 45px 24px 0;
  background-image: url(${bgMobileLight});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${mq[1]} {
    min-height: 300px;
    padding: 78px 24px 0;
    background-image: url(${bgDesktopLight});
  }
`;