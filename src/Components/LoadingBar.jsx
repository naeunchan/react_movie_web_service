import React from "react";
import styled from "styled-components";
import DotLoader from "react-spinners/DotLoader";

const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.9);
`;

const ModalContainer = styled.div`
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);
`;

const LoadingBar = () => {
    const color = "#db0000";

    return (
        <ModalBackground>
            <ModalContainer>
                <DotLoader color={color} size={80} speedMultiplier={1} />
            </ModalContainer>
        </ModalBackground>
    );
};

export default LoadingBar;
