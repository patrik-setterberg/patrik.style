import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`    
    :root {
        --text-color: #333;
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

export default GlobalStyle;