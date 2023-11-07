import { categories } from "../config";
// const MAXIMUM_POSTS = 5;

const getPostsFromCategory = ({ post }, categoryId) =>
  Object.keys(post)
    .map((postID) => post[postID])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));

export const getPostsGroupedByCategory = (source) => {
  return Object.values(categories).reduce((acc, categoryId) => {
    const posts = getPostsFromCategory(source, categoryId);
    // .slice(
    //   0,
    //   MAXIMUM_POSTS
    // );
    const category = source.category[categoryId];
    return [...acc, { posts, category }];
  }, []);
};

export function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
}
