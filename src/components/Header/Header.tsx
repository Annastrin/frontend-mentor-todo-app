/** @jsxImportSource @emotion/react */
import { header } from "./Header-styles";
import { logo } from "./Header-styles";
import { themeSwitcher } from "./Header-styles";
//import {ReactComponent as IconSun} from './images/icon-sun.svg';
import { ReactComponent as IconMoon } from "./images/icon-moon.svg";

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <header css={header}>
      <div css={logo}>Todo</div>
      <button css={themeSwitcher}>
        <IconMoon />
      </button>
    </header>
  );
}

export default Header;
