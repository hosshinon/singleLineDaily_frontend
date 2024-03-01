import React from "react";
import { Post } from "./type";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button>編集</button>
          <button>削除</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
