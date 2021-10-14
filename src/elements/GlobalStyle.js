import { createGlobalStyle } from "styled-components";

/* Global */
const GlobalStyle = createGlobalStyle`

/* Universal tags*/
* {
    box-sizing: border-box;
}

body {
    margin: 0 auto;
    cursor: default;
    background-color: #d8dde4;
}

a {
    text-decoration: none;
}

ul {
    padding-left: 0;
}

li {
    list-style: none;
}

button {
    cursor: pointer;
    outline: none;
}
`;

export default GlobalStyle;
