import styled from "styled-components";

export const Item = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 5px;
    width: ${(props) => (props.hover ? "100%" : "100%")};
    z-index: ${(props) => (props.hover && "30")};
    background-color: ${(props) => (props.hover ? "#fae6b9" : "#ffd473")};
    height: ${(props) => (props.hover ? '25%' : '10%')};
    color: ${(props) => (props.cor)};
    transition: 0.6s;
    align-self: baseline;
`;


export const Nome = styled.div`
    display: flex;
    text-align: start;
    width: 70%;
    font-size: 1.1em;
    
    p {
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow:    ellipsis;
    }
`;

export const PontoCarne = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    text-align: start;
    font-size: .6em;
    color: black;
    margin-right: 3px;  
    font-weight: bold;
    background-color: yellow;
    border: 1px solid black;
    border-radius: 50%;
    p{
        padding: 2px;
    }
`;

export const BoxAdc = styled.div`
    display: grid;
    gap: 3px;
    grid-template-columns: ${(props) => (props.qtdAdc <= 3 && '1fr')};
    grid-template-columns: ${(props) => (props.qtdAdc > 3 && '1fr 1fr')};
    grid-template-columns: ${(props) => (props.qtdAdc > 6 && '1fr 1fr 1fr')};
    grid-template-columns: ${(props) => (props.qtdAdc > 9 && '1fr 1fr 1fr 1fr')};
`;

export const Adc = styled.div`
    font-size: .8em;
`;

export const Obs = styled.div`
    font-size: .8em;
    position: absolute;
    transform: translateY(20px);
`;

export const CardPedido = styled.div`
    display: none;
`;