import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from 'styled-components';
import App from './App';
const GlobalStyle = createGlobalStyle`

body {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vw;
   

    background-image: linear-gradient( to bottom right, #96c0ff 0%, #b7eb8f 100%);
}


*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

`;

ReactDOM.createRoot(document.getElementById("root")).render(
<>
<GlobalStyle />
<App />
</>
);