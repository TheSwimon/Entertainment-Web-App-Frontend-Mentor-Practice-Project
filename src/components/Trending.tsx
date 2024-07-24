import { useContext } from "react";
import { PostsContext } from "../Layouts/Layout";
import useHandleContext from "../hooks/useHandleContext";
import bookmarkIcon from "/assets/icon-bookmark-empty.svg";
import movieIcon from "/assets/icon-category-movie.svg";
import tvIcon from "/assets/icon-category-tv.svg";
import playIcon from "/assets/icon-play.svg";

export default function Trending() {
  const posts = useHandleContext(PostsContext);

  const trendingPosts = posts.filter((post) => {
    return post.isTrending;
  });

  return (
    <div className="mb-8">
      <h2 className="text-[20px] font-normal text-white mb-4">Trending</h2>
      <div className=" grid  grid-cols-[240px_240px_240px_240px_240px] gap-4">
        {trendingPosts.map((post) => {
          return (
            <div
              key={post.title}
              className="relative group rounded-lg overflow-hidden after:h-[100%] after:w-[100%] after:absolute after:bottom-0 after:bg-gradient-to-b after:from-[rgb(255,255,255,0)] after:to-[rgb(0,0,0,0.25)] after:to-90% cursor-pointer"
            >
              <div className="hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80px] h-[30px] px-2 py-2 rounded-3xl text-[16px] text-white bg-[rgb(255,255,255,0.25)] items-center gap-2 z-[10]">
                {" "}
                <div className=" h-[20px] w-[20px] rounded-[50%]">
                  <img src={playIcon} alt={`play icon`} />
                </div>{" "}
                <span>Play</span>{" "}
              </div>
              <img
                className="block w-[100%] h-auto brightness-90 rounded-lg group-hover:brightness-50"
                src={post.thumbnail.trending?.small}
                alt={`${post.title}'s cover image`}
              />

              <span className="absolute top-2 right-2 h-7 w-7 bg-[rgb(16,20,30,0.50)] rounded-[50%] flex items-center justify-center hover:scale-110 transition-transform">
                <img src={bookmarkIcon} alt={`bookmark icon`} />
              </span>
              <div className="absolute bottom-3 left-4 z-10">
                <ul className="flex gap-3 text-[rgb(255,255,255,0.75)] text-[12px]">
                  <li>
                    <span>{post.year}</span>
                  </li>
                  <li className=" flex items-center gap-2">
                    <span className=" h-1 w-1 bg-[rgb(255,255,255,0.75)] rounded-[50%]"></span>
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
                    <span className=" h-1 w-1 bg-[rgb(255,255,255,0.75)] rounded-[50%]"></span>
                    <span>{post.rating}</span>
                  </li>
                </ul>
                <h3 className=" text-[15px] font-medium text-white">
                  {post.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
