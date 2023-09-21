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
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://localhost:8888/wordpress-trunk/",
          postTypes: [
            {
              type: "reviews",
              endpoint: "reviews",
              archive: "/reviews",
            },
            {
              type: "interviews",
              endpoint: "interviews",
              archive: "/interviews",
            },
            {
              type: "listen",
              endpoint: "listen",
              archive: "/listen",
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
