import Posts from "../components/Posts";

export default function Movies() {
  const page = "bookmarks";

  return (
    <div className="pb-10">
      <div className="pb-10">
        <h2 className="text-white text-[20px] pb-4">Movies</h2>
        <Posts category={"Movie"} page={page} />
      </div>
      <div>
        <h2 className="text-white text-[20px] pb-4">TV-Series</h2>
        <Posts category={"TV Series"} page={page} />
      </div>
    </div>
  );
}
