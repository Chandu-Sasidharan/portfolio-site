import { createGlobalStyle } from 'styled-components';

// let fontsize = "calc((1vw + 1vh)/2)";
// let fontsize = "clamp(40%, (0.5vw + 0.5rem) , 100%)";
let fontsize = 'calc(0.2vw + 0.3vh + 0.3rem)';

const GlobalStyles = createGlobalStyle`
    * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Ubuntu', 'Roboto', sans-serif;
    }

    body {
        line-height: 1.6;
        font-weight: 300;
    }

    ::selection {
	    background-color: #ff7043;
	    color: #fff;
    }

    ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
    }

    html {
        font-size: 62.5%; //fallback
	    font-size: ${fontsize};
	}
`;

export default GlobalStyles;
