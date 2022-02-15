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
    font-family: "Modesta";
    font-size: 10rem;
    margin: 5rem 0;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    @media ${style.media.sm} {
        font-size: 5rem;
        margin: 1.5rem;
    }

    @media ${style.media.md} {
        font-size: 8rem;
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
