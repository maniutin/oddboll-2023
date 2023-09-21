import Root from "./components";
import { categories } from "./config";

const oddbollTheme = {
  name: "oddboll-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all(
          Object.keys(categories).map((category) =>
            actions.source.fetch(`/category/${category}/`)
          )
        );
      },
    },
  },
};

export default oddbollTheme;
