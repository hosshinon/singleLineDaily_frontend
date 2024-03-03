"use client"
import React, { useState } from 'react'
import { createPost } from '../Blog_API';
import { useRouter } from 'next/navigation';

const CreatePost = () => {

	const router=useRouter()
	const[title,setTitle]=useState("")
	const[content,setContent]=useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
    try {
      await createPost(title, content);
      router.push("/");
      router.refresh();
    } catch (error) {
      alert("投稿に失敗しました");
    }
	}

	return (
    <div>
      <h1>ブログ新規登録</h1>
      <form onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)} />
        <label>本文</label>
				<textarea onChange={(e) => setContent(e.target.value)} />
				<button type='submit'>投稿</button>
      </form>
    </div>
  );
}

export default CreatePost