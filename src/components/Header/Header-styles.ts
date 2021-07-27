import { css } from '@emotion/react';
import { colors, mq } from '../App/App-styles';
import moonIcon from './images/icon-moon.svg';

export const header = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  ${mq[1]} {
    margin-bottom: 50px;
  }
`;

export const logo = css`
  height: 30px;
  color: ${colors.primary.white};
  font-size: 2.2em;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 10px;
  text-transform: uppercase;

  ${mq[1]} {
    letter-spacing: 15px;
  }
`;

export const themeSwitcher = css`
  width: 20px;
  height: 20px;
  border: 0;
  padding: 0;
  background-color: transparent;
  background-image: url(${moonIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px;
  font-size: 0;
  color: transparent;
  cursor: pointer;

  ${mq[1]} {
    width: 26px;
    height: 26px;
    background-size: 100% 100%;
  }
`;