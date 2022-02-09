import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@400;700&family=Roboto:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0
}

html {
  font-size: 62.5%
}

body {
    ${({ theme }) =>
      css`
        background: ${theme.Background.mainBg};
        font-size: 1.6rem
        font-family: 'Open Sans', sans-serif;
      `}

      h1 {
        font-size: 2.4rem
        font-family: 'Montserrat', sans-serif;
      }


`;
