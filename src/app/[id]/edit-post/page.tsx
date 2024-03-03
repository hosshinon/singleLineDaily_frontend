"use client";
import React, { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import { editPost, getDetailPost } from "@/app/Blog_API";
import { Post } from "@/app/type";



const EditPost = ({ params }: { params: { id: string } }) => {
  
  useEffect(() => {
    // コンポーネントのマウント時に既存の投稿データを取得
    const fetchData = async () => {
      try {
        const detailPost = await getDetailPost(params.id);
        setTitle(detailPost.title);
        setContent(detailPost.content);
      } catch (error) {
        console.error("投稿の取得に失敗しました", error);
      }
    };
    fetchData();
  }, [params.id]); // params.idが変更された場合に再度実行


  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await editPost(params.id, title, content);
      router.push("/");
      router.refresh();
    } catch (error) {
      alert("編集に失敗しました");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>ブログ編集</h1>
      <form onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>本文</label>
        <textarea onChange={(e) => setContent(e.target.value)} value={content} />
        <button type='submit'>投稿</button>
      </form>
    </div>
  );
};

export default EditPost;
