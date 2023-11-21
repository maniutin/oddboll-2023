import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { removeTags } from "../../helpers";

const PostCard = ({ item, post, state }) => {
  return (
    <StyledHomeListItem key={item.id}>
      <Link link={post.link} style={{ marginRight: "5%" }}>
        <img src={state.source.attachment[post.featured_media]?.source_url} />
      </Link>
      <StyledHomeListItemText>
        <Link link={post.link}>
          <h1>{post.title.rendered}</h1>
        </Link>
        <p>
          <em>{removeTags(post.excerpt.rendered)}</em>
        </p>
        <Link link={post.link} style={{ marginTop: "10px" }}>
          Read More
        </Link>
      </StyledHomeListItemText>
    </StyledHomeListItem>
  );
};

const StyledHomeListItem = styled.div`
  display: flex;
`;
const StyledHomeListItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export default connect(PostCard);
