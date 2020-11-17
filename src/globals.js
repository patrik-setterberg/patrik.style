import {createGlobalStyle} from 'styled-components';

// MEDIA BREAKPOINT VARS TWEAK HERE
const largestSmall = 767; // px
const largestMedium = 1299; // px

export {largestSmall};

const globalVars = {
    
    // Header
    minHeaderHeightSmall: 74, // px
    minHeaderHeightLarge: 98, //px
    defaultHeaderHeight: 500, // px
    headerOpenHeight: 600, // px


    // Media breakpoints
    small: `only screen and (max-width: ${largestSmall}px)`,
    medium: `only screen and (min-width: ${largestSmall+1}px) and (max-width: ${largestMedium}px)`,
    atMostMedium: `only screen and (max-width: ${largestMedium}px)`,
    atleastMedium: `only screen and (min-width: ${largestSmall+1}px)`,
    large: `only screen and (min-width: ${largestMedium+1}px)`,
    
    // Container
    containerWidthMedium: 700,
    containerWidthLarge: 'min(60%, 1200px)',
}
export default globalVars;

const GlobalStyle = createGlobalStyle`    
    :root {
        --container-width: auto;
        --header-open-height: 100vh;
        --main-margin-top: ${globalVars.defaultHeaderHeight}px;

        --default-padding: 1.5rem;  /* 24px */
        --default-font-size: 1.125rem; /* 18px */
        --default-outline: 2px dashed rgba(255, 255, 255, 0.6);
        --default-timing: cubic-bezier(0.78, 0.2, 0.05, 1.0);

        // COLORS
        --color-dark-cyan-01: #37505C;
        --color-dark-cyan-02: #283a42;
        --color-dark-cyan-03: #24333a;

        --color-dark-blue: #2E343C;
        
        --color-almost-black: #333;
        --color-gray: #444;
        --color-cream: #ffead0;
        --color-white: #fff;

        --text-color: var(--color-almost-black);

    
    }

    @media ${globalVars.atleastMedium} {
        :root {
            --header-open-height: ${globalVars.headerOpenHeight}px;
            --default-padding: 2rem;
        }
    }

    @media ${globalVars.medium} {
        :root {
            --container-width: ${globalVars.containerWidthMedium}px;
        }
    }

    @media ${globalVars.large} {
        :root {
            --container-width: ${globalVars.containerWidthLarge};
        }
    }
        
    * {
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
        box-sizing: border-box;
    }
  
    #root {
        display: flex;
        flex-direction: column;
        font-family: 'Nunito Sans', sans-serif;
        height: 100%;
        color: var(--text-color);
    }

    body.no-outline:focus,
    body.no-outline *:focus ~ * {
        outline: none !important;
    }

    *:active,
    *:active ~ * {
        outline: none;
    }
`

export {GlobalStyle};