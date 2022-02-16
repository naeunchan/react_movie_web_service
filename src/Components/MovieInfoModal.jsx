import React from "react";
import styled from "styled-components";
import style from "../style";

const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: ${style.color.black};
    opacity: 0.8;
`;

const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    top: 50px;
    width: 80vw;
    height: 100%;
    background-color: ${style.color.gray};
    opacity: 1;
    border-radius: 16px;
`;

const MovieInfoModal = (props) => {
    return (
        <ModalBackground>
            <ModalContainer>hello</ModalContainer>
        </ModalBackground>
    );
};

export default MovieInfoModal;
