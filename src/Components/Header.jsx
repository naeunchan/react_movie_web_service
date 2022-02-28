import React from "react";
import styled from "styled-components";
import Search from "./Search";
import style from "../style/";
import Logo from "../style/images/logo.png";

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

const StyledImg = styled.img`
    margin: 5rem 0;
    cursor: pointer;
`;

const StyledHr = styled.hr`
    min-width: 300px;
    width: 80vw;
    height: 5px;
    background-color: ${style.color.gray};
    border-radius: 16px;
    margin-top: 50px;
    border: none;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <StyledImg src={Logo} alt="logo" />
            <Search />
            <StyledHr />
        </HeaderContainer>
    );
};

export default Header;
