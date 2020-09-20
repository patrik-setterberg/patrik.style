import {createGlobalStyle} from 'styled-components';

const globalVars = {
    
    // Header
    minHeaderHeight: 100, // px
    defaultHeaderHeight: 500, // px
    headerOpenHeight: 500, // px
    
    // Container
    containerWidth: 66 // %
}

export {globalVars};


const GlobalStyle = createGlobalStyle`    
    :root {
        --text-color: #333;
        --container-width: auto;
        --header-open-height: 100vh;
        --main-margin-top: ${globalVars.defaultHeaderHeight}px;
    }

    @media only screen and (min-width: 768px) {
        :root {
            --header-open-height: ${globalVars.headerOpenHeight}px;
            --container-width: ${globalVars.containerWidth}%;
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
`

export {GlobalStyle};