import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // RESET ================================
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }

    ul,
    li {
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    html {
        font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px por ex)
    }

    // ANIMATION ================================
    .animeLeft {
      opacity: 0;
      transform: translateX(-20px);
      animation: anime 0.3s forwards;
    }

    @keyframes anime {
    to {
      opacity: 1;
      transform: initial;
      }
    }

    // VARIABLES ================================
    /* ${({ theme }) => css`
      body {
        color: ${theme.colors.normal.primary};
      }
    `} */
`;

export default GlobalStyles;
