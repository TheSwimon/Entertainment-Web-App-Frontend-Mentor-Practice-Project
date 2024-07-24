import bookmarkIconEmpty from "/assets/icon-bookmark-empty.svg";
import bookmarkIconFull from "/assets/icon-bookmark-full.svg";
import movieIcon from "/assets/icon-category-movie.svg";
import tvIcon from "/assets/icon-category-tv.svg";
import playIcon from "/assets/icon-play.svg";
import useHandleContext from "../hooks/useHandleContext";
import { PostsContext } from "../Layouts/Layout";

interface Category {
  category: string;
  page?: string;
}

export default function Posts({ category, page }: Category) {
  const posts = useHandleContext(PostsContext);

  let filteredPosts = posts.filter((post) => {
    return post.category === category;
  });

  if (page === "bookmarks") {
    filteredPosts = filteredPosts.filter((post) => {
      return post.isBookmarked;
    });
  }

  return (
    <div className=" grid grid-cols-2 tablet:grid-cols-3 preDesktop:grid-cols-4 justify-between gap-x-4 gap-y-5">
      {filteredPosts.map((post) => {
        return (
          <div
            key={post.title}
            className="relative w-[100%] rounded-lg overflow-hidden"
          >
            <div className="relative group cursor-pointer">
              <img
                className="rounded-lg group-hover:brightness-50 min-h-[110px] mb-2"
                src={post.thumbnail.regular.small}
                alt={`${post.title}'s cover image`}
              />
              <div className="hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80px] h-[30px] lg:h-[48px] lg:w-[117px] px-2 py-2 rounded-3xl text-white bg-[rgb(255,255,255,0.25)]  items-center gap-2 lg:gap-4">
                {" "}
                <div className=" h-[20px] w-[20px] lg:h-[30px] lg:w-[30px] rounded-[50%]">
                  <img src={playIcon} alt={`play icon`} />
                </div>{" "}
                <span className="text-[16px] lg:text-[18px]]">Play</span>{" "}
              </div>
            </div>
            <span className="absolute top-2 right-2 h-7 w-7 bg-[rgb(16,20,30,0.50)] rounded-[50%] flex items-center justify-center hover:scale-110 transition-transform">
              <img
                src={post.isBookmarked ? bookmarkIconFull : bookmarkIconEmpty}
                alt={`bookmark icon`}
              />
            </span>

            <div>
              <ul className="flex gap-2 text-[rgb(255,255,255,0.75)] text-[11px] tablet:text-[13px]">
                <li>
                  <span>{post.year}</span>
                </li>
                <li className=" flex items-center gap-2">
                  <span className=" h-0.5 w-0.5 bg-[rgb(255,255,255,0.75)] rounded-[50%]"></span>
                  <img
                    src={
                      post.category.toLowerCase() === "movie"
                        ? movieIcon
                        : tvIcon
                    }
                    alt={`${post.category} icon`}
                  />
                  <span>{post.category}</span>
                </li>
                <li className=" flex items-center gap-2">
                  <span className=" h-0.5 w-0.5 bg-[rgb(255,255,255,0.75)] rounded-[50%]"></span>
                  <span>{post.rating}</span>
                </li>
              </ul>
              <h3 className=" text-[14px] tablet:text-[18px] font-medium text-white">
                {post.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
