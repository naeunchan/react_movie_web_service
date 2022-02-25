import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import style from "../style/";

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`;

const StyledTitle = styled.h1`
    color: #eb1c24;
    font-size: 130px;
    letter-spacing: -10px;
    word-spacing: -10px;
    margin: 5rem 0;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    @media ${style.media.sm} {
        font-size: 50px;
        letter-spacing: -5px;
        word-spacing: 0px;
    }

    @media ${style.media.md} {
        font-size: 110px;
    }
`;

const Title = ({ text, ...props }) => {
    return (
        <TitleContainer>
            <StyledTitle>{text}</StyledTitle>
        </TitleContainer>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;
