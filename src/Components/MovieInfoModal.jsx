import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import style from "../style";
import { ModalContext } from "../store/ModalState";
import { InformationContext } from "./../store/InformationState";

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
    flex-direction: column;
    top: 50px;
    width: 80vw;
    height: 100%;
    background-color: ${style.color.gray};
    opacity: 1;
    border-radius: 16px;
`;

const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;
    flex-direction: column;
`;

const InfoWrapper = styled.div`
    display: flex;
`;

const InfoKey = styled.div`
    font-size: 1.3rem;
`;

const InfoValue = styled.div`
    font-size: 1rem;
`;

const MovieInfoModal = (props) => {
    const { info } = useContext(InformationContext);
    const { setModal } = useContext(ModalContext);

    const handleClickedModalBackground = (e) => {
        if (e.target === e.currentTarget) {
            setModal(false);
        }
    };

    const objectToArray = (obj) => {
        return Object.keys(obj).map((key) => [key, obj[key]]);
    };

    const getMovieInfo = () => {
        return objectToArray(info).map((v) => (
            <InfoWrapper key={v[0]}>
                <InfoKey>{v[0]}</InfoKey>
                <InfoValue>
                    {Array.isArray(v[1])
                        ? v[1].map((rating) =>
                              objectToArray(rating).map((r) => (
                                  <InfoWrapper key={r[0]}>
                                      <InfoKey>{r[0]}</InfoKey>
                                      <InfoValue>{r[1]}</InfoValue>
                                  </InfoWrapper>
                              ))
                          )
                        : v[1]}
                </InfoValue>
            </InfoWrapper>
        ));
    };
    console.log(info);
    return (
        <ModalBackground onClick={handleClickedModalBackground}>
            <ModalContainer>
                <InfoContainer>{getMovieInfo()}</InfoContainer>
            </ModalContainer>
        </ModalBackground>
    );
};

export default MovieInfoModal;
