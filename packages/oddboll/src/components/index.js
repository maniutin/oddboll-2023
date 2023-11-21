import React, { useEffect } from "react";
import { connect, css, Global, styled } from "frontity";
import HomeList from "./HomeList/HomeList";
import Nav from "./Nav/Nav";
import Page from "./Page";
import Post from "./Post";
import PostCard from "./PostCard/PostCard";
import Switch from "@frontity/components/switch";

import LatoLight from "../assets/fonts/Lato-Light.ttf";
import LatoLightItalic from "../assets/fonts/Lato-LightItalic.ttf";
import PoppinsLight from "../assets/fonts/Poppins-Light.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  const allPostsArr = [];

  allPostsArr.push(
    state.source.get("/reviews")?.items,
    state.source.get("/interviews")?.items,
    state.source.get("/listen")?.items
  );

  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Lato";
            font-style: normal;
            font-weight: 100;
            font-display: fallback;
            src: url("${LatoLight}") format("truetype");
          }
          @font-face {
            font-family: "Lato";
            font-style: italic;
            font-weight: 100;
            font-display: fallback;
            src: url("${LatoLightItalic}") format("truetype");
          }
          @font-face {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 300;
            font-display: fallback;
            src: url("${PoppinsLight}") format("truetype");
          }
          @font-face {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-display: fallback;
            src: url("${RobotoRegular}") format("truetype");
          }
        `}
      />
      <Nav />
      <StyledMain>
        {state.router.link === "/" ? (
          allPostsArr
            .flat()
            .sort((a, b) => a.id - b.id)
            .reverse()
            .map((item) => {
              const post = state.source[item?.type][item?.id];
              return <PostCard key={item.id} post={post} item={item} />;
            })
        ) : (
          <Switch>
            <HomeList when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Post when={data.isReviews} />
            <Post when={data.isInterviews} />
            <Post when={data.isListen} />
          </Switch>
        )}
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  padding: 6vw;
`;

export default connect(Root);
