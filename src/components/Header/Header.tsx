/** @jsxImportSource @emotion/react */
import { header } from "./Header-styles";
import { logo } from "./Header-styles";
import { themeSwitcher } from "./Header-styles";

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <header css={header}>
      <div css={logo}>Todo</div>
      <button type="button" css={themeSwitcher}>
        Switch theme
      </button>
    </header>
  );
}

export default Header;
