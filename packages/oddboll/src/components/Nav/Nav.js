import React, { useState } from "react";
import { connect } from "frontity";
import { css } from "frontity";
import { styled } from "frontity";
import Link from "@frontity/components/link";

import Logo from "../../assets/oddboll-logo.png";

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink link="/">
        <StyledNavLogo src={Logo} alt="oddboll logo" />
      </StyledLink>
      <StyledNavList>
        <StyledLink link="/">Home</StyledLink>

        <StyledLink link="/reviews">Reviews</StyledLink>

        <StyledLink link="/interviews">Interviews</StyledLink>

        <StyledLink link="/listen">Listen</StyledLink>

        <StyledLink link="/3-word-reviews">3-Word Reviews</StyledLink>

        <StyledLink link="/about">About</StyledLink>
      </StyledNavList>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100vw;
  padding-top: 1.8vw;
  padding-bottom: 1.8vw;
  background-color: #fff;
  font-family: aktiv-grotesk;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  position: relative;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  padding-top: 1.8vw;
  padding-bottom: 1.8vw;
  padding-left: 6vw;
  padding-right: 6vw;
  pointer-events: auto;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledNavList = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  padding: 2vw;
  color: black;
  text-decoration: none;
`;

const StyledNavLogo = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 50px;
  border: 0;
  cursor: pointer;
  height: fit-content;
`;

export default connect(Nav);
