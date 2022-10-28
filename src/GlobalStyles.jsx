import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${(props) => props.theme.body};
  }

  
body::-webkit-scrollbar {
  display: none;
}


`;
export default GlobalStyles;
