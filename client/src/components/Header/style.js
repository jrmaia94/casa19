import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 0 15px;
    height: 100px ;
    text-align: center;
    background: #fec453;
    border-radius: 5px;
    opacity: 0.85;
    color: #202020;
`;

export const BoxBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 40%;

    img {
        height: 100%;
        margin-right: 10px;
    }
`;

export const Title = styled.h1`
    font-family: 'Satisfy', cursive;
    font-size: 3em;
`;

export const parag = styled.p`
    margin-top: -10px;
    font-weight: bold;
`;