"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { createTodo } from "../Blog_API";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTodo(title, content);
      setTitle("");
      setContent("");
      router.refresh();
    } catch (error) {
      alert("投稿に失敗しました");
    }
  };

  return (
    <form className='mb-4 space-y-3' onSubmit={handleSubmit}>
      <label>タイトル</label>
      <input
        type='text'
        className='w-full border px-4 py-2 focus:outline-none focus:border-blue-400'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
      />
      <label>本文</label>
      <textarea
        className='w-full border px-4 py-2 focus:outline-none focus:border-blue-400'
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
        value={content}
      />
      <button className='w-full px-4 py-2 text-white bg-blue-500 rounded transform  hover:bg-blue-400 hover:scale-95'>
        AddTask
      </button>
    </form>
  );
};

export default AddTask;
