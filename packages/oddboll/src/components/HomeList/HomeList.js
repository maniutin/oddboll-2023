import React from "react";
import { connect } from "frontity";
import PostCard from "../PostCard/PostCard";

const HomeList = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return <PostCard key={item.id} post={post} item={item} />;
      })}
    </div>
  );
};

export default connect(HomeList);
