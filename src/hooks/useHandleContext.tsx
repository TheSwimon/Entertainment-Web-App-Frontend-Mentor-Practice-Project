import { useContext } from "react";

export default function useHandleContext(
  PostsContext: React.Context<PostProps | undefined>
) {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("failed to get value of context!");
  }

  return context;
}
