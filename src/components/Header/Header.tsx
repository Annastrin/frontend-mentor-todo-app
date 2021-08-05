/** @jsxImportSource @emotion/react */
import { header } from "./Header-styles";
import { logo } from "./Header-styles";
import { themeSwitcher } from "./Header-styles";

export interface HeaderCallback {
  onSwitchTheme: () => void;
}

export function Header(props: HeaderCallback) {
  const switchTheme = () => {
    props.onSwitchTheme();
  };
  return (
    <header css={header}>
      <div css={logo}>Todo</div>
      <button type="button" css={themeSwitcher} onClick={switchTheme}>
        Switch theme
      </button>
    </header>
  );
}

export default Header;
