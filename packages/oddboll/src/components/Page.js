import React from "react";
import { connect } from "frontity";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <div>
      <h2 style={{ fontFamily: "Roboto" }}>{page.title.rendered}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        style={{ fontFamily: "Lato" }}
      />
    </div>
  );
};

export default connect(Page);
