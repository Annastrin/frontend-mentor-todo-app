import { css } from '@emotion/react';
import { colors, mq } from '../../style-guide';

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Josefin Sans", sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    font-family: "Josefin Sans", sans-serif;
  }

  ${mq[1]} {

    body {
      font-size: 18px;
    }
  }
`;

export const app = css`
  background-color: ${colors.lightTheme.bgColor};
  color: ${colors.lightTheme.textColor};
`;