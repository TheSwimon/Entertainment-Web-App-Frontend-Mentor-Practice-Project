import Posts from "../components/Posts";

export default function Movies() {
  const category = "TV Series";
  return (
    <div className="pb-10 pt-8">
      <h2 className="text-white text-[20px] pb-4">TV-Series</h2>
      <Posts category={category} />
    </div>
  );
}
