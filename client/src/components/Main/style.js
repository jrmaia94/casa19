import styled from "styled-components";

export const ContainerPedidos = styled.div`
    color: #202020;
    display: flex;
    height: fit-content;
    min-height: calc(100vh - 130px);
    justify-content: space-between;
    text-align: center;
    padding: 15px 15px;
`;

export const ContainerProdutos = styled.div`
    color: #202020;
    display: flex;
    height: fit-content;
    min-height: calc(100vh - 130px);
    justify-content: space-around;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 15px 15px;
`;

export const BtnAdd = styled.button`
    display: flex;
    color: #252525;
    opacity: 0.4;
    border: 1px solid transparent;
    box-shadow: 0px 0px 5px #252525;
    background-color: rgba(117, 255, 92, 0.6);
    border-radius: 50%;
    position: absolute;
    font-size: 2em;
    padding: 15px;
    bottom: 8%;
    right: 4%;
    transition: .2s;
    
    :hover{
        opacity: 1;
        scale: 1.1;
        cursor: pointer;
    }
`;

export const ContainerForm = styled.div`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    height: fit-content;
    min-height: 78%;
    width: 98%;
    justify-content: space-between;
    text-align: center;
    padding: 15px 15px;
    background-color: rgba(254, 196, 83, .85);
`;