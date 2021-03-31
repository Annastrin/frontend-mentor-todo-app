import { css } from '@emotion/react';
import {mq} from '../App/App-styles';
import bgDesktopLight from './images/bg-desktop-light.jpg';
import bgMobileLight from './images/bg-mobile-light.jpg';
//import bgDesktopDark from './images/bg-desktop-dark.jpg';
//import bgMobileDark from './images/bg-mobile-dark.jpg';

export const background = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 200px;
  background-image: url(${bgMobileLight});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${mq[1]} {
    height: 300px;
    background-image: url(${bgDesktopLight});
  }
`;