import Posts from "../components/Posts";

export default function Movies() {
  const page = "bookmarks";

  return (
    <div className="pb-10">
      <div className="pb-10 xl:pb-20">
        <h2 className="text-white text-[20px] tablet:text-[32px] pb-4">
          Bookmarked Movies
        </h2>
        <Posts category={"Movie"} page={page} />
      </div>
      <div>
        <h2 className="text-white text-[20px] tablet:text-[32px] pb-4">
          Bookmarked TV-Series
        </h2>
        <Posts category={"TV Series"} page={page} />
      </div>
    </div>
  );
}
