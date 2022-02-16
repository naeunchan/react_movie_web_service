import React from "react";
import styled from "styled-components";
import PacmanLoader from "react-spinners/PacmanLoader";

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
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const LoadingBar = () => {
    const color = "#db0000";

    return (
        <ModalBackground>
            <ModalContainer>
                <PacmanLoader color={color} size={100} speedMultiplier={1} />
            </ModalContainer>
        </ModalBackground>
    );
};

export default LoadingBar;
