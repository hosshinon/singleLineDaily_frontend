"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Todo } from "../type";
import { deleteTodo, editTodo } from "../Blog_API";
import { useRouter } from "next/navigation";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedContent, setEditedContent] = useState(todo.content);
  const router = useRouter();

  //編集時のカーソルfocus
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  //編集中か判定
  const handleEdit = async () => {
    setIsEditing(true);
  };

  //編集中の内容を保存するか判定
  const handleSave = async () => {
    await editTodo(todo.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  //削除
  const handleDelete = async () => {
    await deleteTodo(todo.id);
    router.refresh();
  };

  return (
    <div>
      <li
        key={todo.id}
        className=' p-4 bg-white border-l-4 border-blue-500 rounded shadow  '
      >
        {/* タイトルが編集中か判定 */}
        {isEditing ? (
          <>
            <label>タイトル</label>
            <input
              ref={ref}
              type='text'
              className='w-full border px-4 py-2 focus:outline-none focus:border-blue-400'
              value={editedTitle}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEditedTitle(e.target.value)
              }
            />
          </>
        ) : (
          <h1 className='text-2xl'>{editedTitle}</h1>
        )}
        {/* 本文が編集中か判定 */}
        {isEditing ? (
          <>
            <label>本文</label>
            <input
              type='text'
              className='w-full border px-4 py-2 focus:outline-none focus:border-blue-400'
              value={editedContent}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEditedContent(e.target.value)
              }
            />
          </>
        ) : (
          <p>{editedContent}</p>
        )}
        <div className='flex justify-between  '>
          <span className='text-sm text-gray-300 '>{todo.created_at}</span>
          <div className='flex gap-x-2'>
            {isEditing ? (
              <button
                className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                onClick={handleSave}
              >
                保存
              </button>
            ) : (
              <button
                className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-100 text-green-800 hover:bg-green-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-green-900 dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                onClick={handleEdit}
              >
                編集
              </button>
            )}
            <button
              className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              onClick={handleDelete}
            >
              削除
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoCard;
