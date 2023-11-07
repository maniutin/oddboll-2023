import React, { useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

import HomeList from "./HomeList/HomeList";
import Nav from "./Nav/Nav";
import Page from "./Page";
import Post from "./Post";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  const allPostsArr = [];

  allPostsArr.push(
    state.source.get("/reviews").items,
    state.source.get("/interviews").items,
    state.source.get("/listen").items
  );

  return (
    <>
      <Nav />
      <hr />
      <main>
        {state.router.link === "/" ? (
          allPostsArr
            .flat()
            .sort((a, b) => a.id - b.id)
            .reverse()
            .map((item) => {
              const post = state.source[item?.type][item?.id];
              return (
                <Link key={item.id} link={post.link}>
                  <div>
                    <img
                      src={
                        state.source.attachment[post.featured_media]?.source_url
                      }
                    />
                    {post.title.rendered}
                  </div>
                </Link>
              );
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
      </main>
    </>
  );
};

export default connect(Root);
