import styled from "styled-components";

export const Item = styled.button`

    border: none;
    background: none;
    font-size: 1.5em;
    font-weight: 500;
    box-sizing: border-box;
    transition: .5s;
    opacity: 1;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    height:60%;

    :hover{
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.3);
        text-shadow: 0px 0px 1px black;
    }
`;