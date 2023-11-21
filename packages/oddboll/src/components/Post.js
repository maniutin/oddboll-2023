import React from "react";
import { connect } from "frontity";
import dayjs from "dayjs";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];

  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");

  return (
    <div>
      <h2 style={{ fontFamily: "Roboto" }}>{post.title.rendered}</h2>
      <p style={{ fontFamily: "Poppins" }}>{formattedDate}</p>

      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        style={{ fontFamily: "Lato" }}
      />
    </div>
  );
};

export default connect(Post);
