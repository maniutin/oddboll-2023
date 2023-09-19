import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

import List from "./List";
import Nav from "./Nav/Nav";
import Page from "./Page";
import Post from "./Post";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Nav />
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
