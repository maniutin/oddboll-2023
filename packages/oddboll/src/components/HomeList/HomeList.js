import React from "react";
import { connect } from "frontity";

import Link from "@frontity/components/link";

const HomeList = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <Link key={item.id} link={post.link}>
            <div>
              <img
                src={state.source.attachment[post.featured_media]?.source_url}
              />
              {post.title.rendered}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default connect(HomeList);
