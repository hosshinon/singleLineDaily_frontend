"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Todo } from "../type";
import { editTodo } from "../Blog_API";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  //編集時のカーソルfocus
	const ref = useRef(null);
	

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedContent, setEditedContent] = useState(todo.content);

  //編集中か判定
  const handleEdit = async () => {
    setIsEditing(true);
  };

  //編集中の内容を保存するか判定
  const handleSave = async () => {
    await editTodo(todo.id, editedTitle, editedContent);
    setIsEditing(false);
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
              className='w-full border px-4 py-2 focus:outline-none focus-:border-blue-400'
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
              className='w-full border px-4 py-2 focus:outline-none focus-:border-blue-400'
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
              <button className='text-blue-500 mr-3' onClick={handleSave}>
                save
              </button>
            ) : (
              <button className='text-green-500 mr-3' onClick={handleEdit}>
                edit
              </button>
            )}
            <button className='text-red-500'>delete</button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoCard;
