import { Outlet } from "react-router";
import Header from "../components/Header";
import { createContext } from "react";
import dataJson from "../data.json";
import { useState } from "react";
import Input from "../components/ui/Input";

export const PostsContext = createContext<PostProps | undefined>(undefined);

export default function Layout() {
  const [posts, setPosts] = useState<Post[]>(dataJson);

  return (
    <div className={`lg:mx-auto max-w-[1840px]`}>
      <Header />
      <PostsContext.Provider value={{ posts, setPosts }}>
        <main className=" bg-[#10141E] px-4 font-outfit overflow-x-hidden lg:pl-32 lg:mt-10">
          <Input />
          <Outlet />
        </main>
      </PostsContext.Provider>
    </div>
  );
}
