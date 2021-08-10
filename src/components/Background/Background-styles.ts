import { css } from '@emotion/react';
import {mq} from '../../style-guide';
import bgDesktopLight from './images/bg-desktop-light.jpg';
import bgMobileLight from './images/bg-mobile-light.jpg';
import bgDesktopDark from './images/bg-desktop-dark.jpg';
import bgMobileDark from './images/bg-mobile-dark.jpg';

export const background = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  [data-theme="lightTheme"] & {
    background-image: url(${bgMobileLight});
  }

  [data-theme="darkTheme"] & {
    background-image: url(${bgMobileDark});
  }

  ${mq[1]} {
    height: 300px;

    [data-theme="lightTheme"] & {
      background-image: url(${bgDesktopLight});
    }

    [data-theme="darkTheme"] & {
      background-image: url(${bgDesktopDark});
    }
  }
`;