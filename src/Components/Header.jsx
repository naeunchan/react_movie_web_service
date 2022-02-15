import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Search from "./Search";
import style from "../style/";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40%;
    overflow: hidden;
    box-sizing: border-box;

    @media ${style.media.sm} {
        height: 30%;
    }
`;

const StyledHr = styled.hr`
    min-width: 400px;
    width: 80vw;
    height: 5px;
    background-color: #564d4d;
    border-radius: 16px;
    margin-top: 50px;
    border: none;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title text="What's the movie?" />
            <Search />
            <StyledHr />
        </HeaderContainer>
    );
};

export default Header;
