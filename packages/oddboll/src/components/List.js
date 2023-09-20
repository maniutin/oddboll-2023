import React from "react";
import { connect } from "frontity";
import { getPostsGroupedByCategory } from "../helpers";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  const postsPerCategory = getPostsGroupedByCategory(state.source);

  console.log("=== DATA: ", postsPerCategory);

  return (
    <div>
      {postsPerCategory.map(({ posts, category }, index) => (
        // const post = state.source[item.type][item.id];
        <div key={category.id}>
          <h1>{category.name}</h1>
          {posts.map((post, index) => (
            <Link key={post.id} link={post.link}>
              {post.title.rendered}
              <br />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default connect(List);
