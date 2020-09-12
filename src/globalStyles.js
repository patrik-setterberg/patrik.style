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
  
    body {
        display: flex;
        flex-direction: column;
        font-family: 'Source Sans Pro', sans-serif;
        height: auto;
        color: var(--text-color);
    }
`

export default GlobalStyle;