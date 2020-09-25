import {createGlobalStyle} from 'styled-components';

const globalVars = {
    
    // Header
    minHeaderHeightSmall: 74, // px
    minHeaderHeightLarge: 95, //px
    defaultHeaderHeight: 400, // px
    headerOpenHeight: 500, // px
    
    // Container
    containerWidthMedium: 700,
    containerWidthLarge: 'min(60%, 1200px)',
}

export {globalVars};


const GlobalStyle = createGlobalStyle`    
    :root {
        --text-color: #333;
        --container-width: auto;
        --header-open-height: 100vh;
        --main-margin-top: ${globalVars.defaultHeaderHeight}px;

        --default-outline: 2px dashed white;
    }

    @media only screen and (min-width: 768px) {
        :root {
            --header-open-height: ${globalVars.headerOpenHeight}px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1299px) {
        :root {
            --container-width: ${globalVars.containerWidthMedium}px;
        }
    }

    @media only screen and (min-width: 1300px) {
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
`

export {GlobalStyle};