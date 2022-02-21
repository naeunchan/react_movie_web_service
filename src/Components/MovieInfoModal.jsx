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
    background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: auto;
    background-color: ${style.color.gray};
    border-radius: 16px;
    overflow-x: hidden;
    overflow-y: auto;
`;

const InfoContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
    padding: 1rem;
    flex-direction: column;
`;

const InfoWrapper = styled.div`
    display: flex;
`;

const InfoKey = styled.div`
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoValue = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PosterContainer = styled.div`
    display: flex;
    justify-content: end;

    @media ${style.media.sm} {
        width: 100%vw;
        top: auto;
        right: auto;
        justify-content: center;
        align-items: center;
    }
`;

const PosterWrapper = styled.div`
    display: flex;
    width: 33.3%;
    margin: 1rem;

    @media ${style.media.sm} {
        width: 50vw;
        top: auto;
        right: auto;
    }
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
        return Object.keys(obj)
            .filter((_, index) => index < 8)
            .map((key) => [key, obj[key]]);
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

    return (
        <ModalBackground onClick={handleClickedModalBackground}>
            <ModalContainer>
                <PosterContainer>
                    <PosterWrapper>
                        <img
                            src={info.Poster}
                            alt={info.Title}
                            style={{ width: "100%", height: "100%", opacity: "1" }}
                        />
                    </PosterWrapper>
                </PosterContainer>
                <InfoContainer>{getMovieInfo()}</InfoContainer>
            </ModalContainer>
        </ModalBackground>
    );
};

export default MovieInfoModal;
