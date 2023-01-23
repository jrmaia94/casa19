import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleError = styled.h1`
    font-size: 3em;
`;

export const TextError = styled.p`

    display: inline-block;
    font-size: 1em;
`;

export const Span = styled.span`
    font-size: 10em;
    color: yellow;
    margin: 20px;
    display: flex;

    svg{
        box-sizing: border-box;
        background-color: black;
        border-radius: 50%;
    }
`;