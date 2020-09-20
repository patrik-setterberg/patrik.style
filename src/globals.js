import {createGlobalStyle} from 'styled-components';

const globalVars = {
    
    // Header
    minHeaderHeight: 100, // px
    defaultHeaderHeight: 450, // px
    headerOpenHeight: 750, // px
    
    // Container
    containerWidth: 66 // %
}

export {globalVars};


const GlobalStyle = createGlobalStyle`    
    :root {
        --text-color: #333;
        --container-width: ${globalVars.containerWidth}%;
        --header-open-height: ${globalVars.headerOpenHeight}px;
        --main-margin-top: ${globalVars.defaultHeaderHeight}px;
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