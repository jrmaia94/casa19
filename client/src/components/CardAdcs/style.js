import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;
    background-color: ${(props) => (props.origem === "form" ? "none" : "#fec453d9")};
    border-radius: 10px;
    width: ${(props) => (props.origem === "form" ? "95%" : "30%")};
    height: ${(props) => (props.origem === "form" ? "80%" : "100%")};
    `;

export const Panel = styled.div`
    width: 100%;
    position: ${(props) => (props.origem !== "form" && "relative")};
    padding-top: ${(props) => (props.origem !== "form" && "90%")};    
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `;

export const Picture = styled.img`
    position: ${(props) => (props.origem !== "form" && "absolute")};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.origem === "form" ? "80%" : "100%")};
`;

export const TitleAdc = styled.h3`
    font-size: 1.2em;
`;