import { Post } from "./type";

//記事一覧取得
export const getPosts = async ():Promise<Post[]> => {
  const res = await fetch("http://127.0.0.1:3001/api/v1/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await res.json();
  // console.log(posts);
  return posts;
};

//記事詳細取得
export const getDetailPost = async(id:string):Promise<Post> => {
  const res = await fetch(`http://127.0.0.1:3001/api/v1/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await res.json();
  //console.log(posts);
  return posts;
};

//記事投稿
export const createPost = async(title:string,content:string):Promise<Post> => {
  
  const res = await fetch("http://127.0.0.1:3001/api/v1/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  console.log(res)

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const newPost = await res.json();
  //console.log(posts);
  return newPost;
};

//記事削除
export const deletePost = async(id:string):Promise<Post> => {
  
  const res = await fetch(`http://127.0.0.1:3001/api/v1/posts/${id}`, {
    method: "DELETE",
  });

  console.log(res)

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const deletePost = await res.json();
  //console.log(posts);
  return deletePost;
};

//記事編集
export const editPost = async(id:string,title:string,content:string):Promise<Post> => {
  
  const res = await fetch(`http://127.0.0.1:3001/api/v1/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  // console.log(id,title,content)

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const editPost = await res.json();
  //console.log(posts);
  return editPost;
};