import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

import HomeList from "./HomeList/HomeList";
import Nav from "./Nav/Nav";
import Page from "./Page";
import Post from "./Post";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log("=== DATA: ", data);

  return (
    <>
      <Nav />
      <hr />
      <main>
        <Switch>
          <HomeList when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Post when={data.isReviews} />
          <Post when={data.isInterviews} />
          <Post when={data.isListen} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
