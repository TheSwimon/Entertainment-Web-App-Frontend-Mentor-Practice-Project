import useHandleContext from "./useHandleContext";
import { PostsContext } from "../Layouts/Layout";
import { useParams } from "react-router";

interface HandleFilter {
  category: string | undefined;
  page?: string;
  searchString: string;
}

export default function useHandleFilter({
  category,
  page,
  searchString,
}: HandleFilter) {
  const { title } = useParams();
  const { posts } = useHandleContext(PostsContext);

  let filteredPosts = [];
  if (title) {
    filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchString.toLowerCase());
    });
  } else {
    // filtering posts based on category (movies or tv-series)

    filteredPosts = posts.filter((post) => {
      return post.category === category;
    });

    // filtering posts based on wether or not they are bookmarked

    if (page === "bookmarks") {
      filteredPosts = filteredPosts.filter((post) => {
        return post.isBookmarked;
      });
    }
  }

  return filteredPosts;
}
