import { useParams } from "react-router";
import Posts from "../components/Posts";

export default function Search() {
  const { title } = useParams();

  return (
    <>
      <h1 className="text-white text-[20px] tablet:text-[32px] pb-4">{`Search Results for "${title}"`}</h1>
      <Posts />
    </>
  );
}
