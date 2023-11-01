import React, { useState } from "react";
import { connect } from "frontity";
import { css } from "frontity";
import { styled } from "frontity";
import Link from "@frontity/components/link";

import Logo from "../../assets/oddboll-logo.png";

const Nav = ({ state }) => {
  return (
    <StyledNav>
      <StyledLink link="/">
        <StyledNavLogo src={Logo} alt="oddboll logo" />
      </StyledLink>
      <StyledNavList>
        <StyledLink
          link="/"
          style={{
            textDecoration: state.router.link === "/" ? "underline" : null,
          }}
        >
          Home
        </StyledLink>

        <StyledLink
          link="/reviews"
          style={{
            textDecoration:
              state.router.link === "/reviews/" ? "underline" : null,
          }}
        >
          Reviews
        </StyledLink>

        <StyledLink
          link="/interviews"
          style={{
            textDecoration:
              state.router.link === "/interviews/" ? "underline" : null,
          }}
        >
          Interviews
        </StyledLink>

        <StyledLink
          link="/listen"
          style={{
            textDecoration:
              state.router.link === "/listen/" ? "underline" : null,
          }}
        >
          Listen
        </StyledLink>

        <StyledLink
          link="/wordpress-trunk/3-word-reviews"
          style={{
            textDecoration:
              state.router.link === "/wordpress-trunk/3-word-reviews/"
                ? "underline"
                : null,
          }}
        >
          3-Word Reviews
        </StyledLink>

        <StyledLink
          link="/wordpress-trunk/about"
          style={{
            textDecoration:
              state.router.link === "/wordpress-trunk/about/"
                ? "underline"
                : null,
          }}
        >
          About
        </StyledLink>
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
  text-underline-offset: 0.5rem;
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
