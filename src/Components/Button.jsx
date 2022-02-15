import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    justify-content: center;
    align-items: center;
`;

const Button = ({ children, onClick, ...props }) => {
    return (
        <ButtonContainer style={{ ...props.style }} onClick={onClick}>
            <ButtonWrapper>{children}</ButtonWrapper>
        </ButtonContainer>
    );
};

export default Button;
