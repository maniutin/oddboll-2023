import React from "react";
import { connect, styled } from "frontity";
import dayjs from "dayjs";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  console.log("=== POST: ", post);

  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");
  const reg = /&#8220;|&#8221;/g;

  return (
    <StyledPostContentWrapper>
      <StyledPostContent>
        <h2 style={{ fontFamily: "Roboto" }}>
          {post.title.rendered.replace(reg, '"')}
        </h2>
        <p style={{ fontFamily: "Lato" }}>{formattedDate}</p>

        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          style={{ fontFamily: "Poppins" }}
        />
      </StyledPostContent>
    </StyledPostContentWrapper>
  );
};

const StyledPostContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledPostContent = styled.article`
  width: 55vw;
`;

export default connect(Post);
