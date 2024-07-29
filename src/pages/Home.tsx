import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import useHandleContext from "../hooks/useHandleContext";
import { PostsContext } from "../Layouts/Layout";

export default function Home() {
  const { searchString } = useHandleContext(PostsContext);

  return (
    <>
      <Trending />
      <Recommended />
    </>
  );
}
