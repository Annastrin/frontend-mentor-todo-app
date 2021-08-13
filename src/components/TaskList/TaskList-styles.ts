import { css } from '@emotion/react';
import { colors } from '../../style-guide';

export const taskList = css`
  border-radius: 5px;
  transition: box-shadow .3s;

  [data-theme="lightTheme"] & {
    background-color: ${colors.lightTheme.taskBgColor};
    box-shadow: 0 30px 30px 1px ${colors.lightTheme.boxShadowColor};
  }

  [data-theme="darkTheme"] & {
    background-color: ${colors.darkTheme.taskBgColor};
    box-shadow: 0 30px 30px 1px ${colors.darkTheme.boxShadowColor};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }
`;