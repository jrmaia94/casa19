import styled from 'styled-components';

export const FormBox = styled.div`
    width: 70%;
    border-right: 3px dotted #252525; 
`;

export const BoxBtn = styled.div`
    display: flex;
    justify-content: center;
`;

export const BtnNextPrev = styled.button`
    display: flex;
    font-size: 1.7em;
    width: 15%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    background-color: rgba( 240, 240, 240, 0.4);
    transition: .3s;
    border-radius: ${(props) => (props.direction === "prev" && "0px 12px 12px 0px")};
    border-radius: ${(props) => (props.direction === "next" && "12px 0px 0px 12px")};
    
    :hover{
        background-color: rgba( 240, 240, 240, 0.8);
        cursor: pointer;
    }    
`;
