import { Post } from "./type";

export const getPosts = async ():Promise<Post[]> => {
  const res = await fetch("http://127.0.0.1:3001/api/v1/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await res.json();
  // console.log(posts);
  return posts;
};
