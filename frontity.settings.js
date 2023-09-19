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
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
