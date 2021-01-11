import { css } from '@emotion/react';
import { colors } from '../app/app-styles';

export const header = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const logo = css`
  height: 30px;
  color: ${colors.primary.white};
  font-size: 2.2em;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 14px;
  text-transform: uppercase;
`;

export const themeSwitcher = css`
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
`;