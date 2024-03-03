import React from "react";
import { getDetailPost } from "../Blog_API";

const Post = async ({ params }: { params: { id: string } }) => {
  //console.log(params.id)
  const detailPost = await getDetailPost(params.id);

  return (
    <div>
      <div>
        <div>{detailPost.title}</div>
        <div>{detailPost.created_at}</div>
        <p>{detailPost.content}</p>
      </div>
    </div>
  );
};

export default Post;
