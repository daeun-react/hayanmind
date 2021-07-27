import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

//* 브라우저 기본 스타일 reset
const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;
