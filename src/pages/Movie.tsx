import Posts from "../components/Posts";

export default function Movies() {
  const category = "Movie";

  return (
    <div className="pb-10">
      <h2 className="text-white text-[20px] pb-4">Movies</h2>
      <Posts category={category} />
    </div>
  );
}
