import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

import Logo from "../../assets/oddboll-logo.png";
import IgLogo from "../../assets/ig_logo.png";
import MixcloudLogo from "../../assets/mixcloud_logo.svg";
import ScLogo from "../../assets/sc_logo.png";
import SpotifyLogo from "../../assets/spotify_logo.png";

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
      <StyledSocialNavList>
        <StyledSocialLink
          link="https://www.instagram.com/odddboll/"
          target="_blank"
        >
          <StyledNavSocialLogo src={IgLogo} alt="oddboll logo" />
        </StyledSocialLink>
        <StyledSocialLink link="https://soundcloud.com/oddboll" target="_blank">
          <StyledNavSocialLogo src={ScLogo} alt="oddboll logo" />
        </StyledSocialLink>
        <StyledSocialLink
          link="https://www.mixcloud.com/kettle_whistle/"
          target="_blank"
        >
          <StyledNavSocialLogo src={MixcloudLogo} alt="oddboll logo" />
        </StyledSocialLink>
        <StyledSocialLink
          link="https://open.spotify.com/user/31vcalh4tgtzrnatjpqtkg7zqmay?si=Yz2EzNO-Q16w38udiB78nw&nd=1"
          target="_blank"
        >
          <StyledNavSocialLogo src={SpotifyLogo} alt="oddboll logo" />
        </StyledSocialLink>
      </StyledSocialNavList>
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
  justify-content: space-between;
  align-items: center;
`;

const StyledNavList = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const StyledLink = styled(Link)`
  margin-left: 3.4vw;
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

const StyledSocialNavList = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const StyledSocialLink = styled(Link)`
  margin-left: 2.5vw;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
`;

const StyledNavSocialLogo = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 50px;
  border: 0;
  cursor: pointer;
  height: fit-content;
`;

export default connect(Nav);
