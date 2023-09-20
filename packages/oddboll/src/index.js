import Root from "./components";
import { categoriesWidgetsHome } from "./config";

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
          Object.keys(categoriesWidgetsHome).map((category) =>
            actions.source.fetch(`/category/${category}/`)
          )
        );
      },
    },
  },
};

export default oddbollTheme;
