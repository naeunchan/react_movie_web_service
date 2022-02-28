import React, { useContext } from "react";
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
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${style.color.background};
    border-radius: 16px;
    width: 820px;
    height: 650px;
    box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;

    @media ${style.media.sm} {
        flex-direction: column;
        width: 350px;
        height: auto;
        overflow: auto;
    }

    @media ${style.media.md} {
        width: 730px;
        height: 630px;
    }
`;

const InfoContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    box-sizing: border-box;

    @media ${style.media.sm} {
        padding-top: 0;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const InfoKey = styled.div`
    font-size: 1.3rem;
    margin: 1rem;

    @media ${style.media.sm} {
        font-size: 1rem;
        margin: 0.3rem;
    }
`;

const InfoValue = styled.div`
    font-size: 1rem;
    color: ${style.color.fontGray};

    @media ${style.media.sm} {
        font-size: 0.8rem;
    }
`;

const PosterContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;

const MovieInfoModal = (props) => {
    const { info } = useContext(InformationContext);
    const { setModal } = useContext(ModalContext);

    const handleClickedModalBackground = (e) => {
        if (e.target === e.currentTarget) {
            setModal(false);
            document.body.style.overflowX = "hidden";
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
                                  <div key={r[0]}>
                                      <InfoKey>{r[0]}</InfoKey>
                                      <InfoValue>{r[1]}</InfoValue>
                                  </div>
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
                    <img
                        src={info.Poster}
                        alt={info.Title}
                        style={{ width: "100%", height: "100%", opacity: "1", borderRadius: "8px" }}
                    />
                </PosterContainer>
                <InfoContainer>{getMovieInfo()}</InfoContainer>
            </ModalContainer>
        </ModalBackground>
    );
};

export default MovieInfoModal;
