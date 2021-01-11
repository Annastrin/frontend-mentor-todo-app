/** @jsxImportSource @emotion/react */
import {header} from './header-styles';
import {logo} from './header-styles';
import {themeSwitcher} from './header-styles';
import {ReactComponent as IconSun} from './images/icon-sun.svg';
import {ReactComponent as IconMoon} from './images/icon-moon.svg';

function Header(props) {
  return(
    <header css={header}>
      <div css={logo}>Todo</div>
      <button css={themeSwitcher}>
        <IconMoon/>
      </button>
    </header>
  );
}

export default Header;