import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { removeTags } from "../../helpers";

const PostCard = ({ item, post, state }) => {
  const reg = /&#8220;|&#8221;/g;

  return (
    <StyledHomeListItem key={item.id}>
      <Link link={post.link} style={{ marginRight: "5%", width: "50%" }}>
        <img
          src={state.source.attachment[post.featured_media]?.source_url}
          style={{ width: "100%" }}
        />
      </Link>
      <StyledHomeListItemText>
        <Link
          link={post.link}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <h1 style={{ fontFamily: "Roboto", letterSpacing: "1px" }}>
            {post.title.rendered.replace(reg, '"')}
          </h1>
        </Link>
        <p style={{ fontFamily: "Lato", fontStyle: "italic" }}>
          {removeTags(post.excerpt.rendered)}
        </p>
        <Link
          link={post.link}
          style={{
            fontFamily: "Poppins",
            fontSize: "smaller",
            marginTop: "10px",
            color: "#fc221c",
            textUnderlineOffset: "0.3rem",
          }}
        >
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
