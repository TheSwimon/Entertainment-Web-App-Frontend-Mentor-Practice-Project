import Navigation from "../components/ui/Navigation";
import { useState, createContext } from "react";
import Input from "../components/ui/Input";
import Trending from "../components/Trending";
import dataJson from "../data.json";

export const PostsContext = createContext<PostProps | undefined>(undefined);

export default function Home() {
  const [posts, setPosts] = useState<Post[]>(dataJson);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <div className=" font-outfit overflow-x-hidden">
        <Navigation />
        <main className=" bg-[#10141E] px-4">
          <Input />
          <Trending />
        </main>
      </div>
    </PostsContext.Provider>
  );
}
