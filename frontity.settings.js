const settings = {
  name: "oddboll",
  state: {
    frontity: {
      url: "http://localhost:8888/wordpress-trunk",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "oddboll",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Reviews", "/blog_post_cat/reviews/"],
            ["Interviews", "/blog_post_cat/interviews/"],
            ["Listen", "/blog_post_cat/listen/"],
            ["All Blog Posts", "/blog_post_cat/"],
            ["Catalogue", "/catalogue"],
            ["3-Word Reviews", "/3-word-reviews/"],
            ["About Us", "/about/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://localhost:8888/wordpress-trunk/",
          postTypes: [
            {
              type: "blog_post",
              endpoint: "blog_post",
              archive: "/blog_post_cat",
            },
          ],
          taxonomies: [
            {
              taxonomy: "blog_post_cat",
              endpoint: "blog_post_cat",
              postTypeEndpoint: "blog_post",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
