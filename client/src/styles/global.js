import { createGlobalStyle  } from "styled-components";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        color: #252525;
        font-family: 'Josefin Sans', sans-serif;
        background-image: url('./background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        padding-top: 30px;
        width: 100vw;
        height: 100vh;
    }
`;

export default Global