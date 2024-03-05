import React from "react";
import AddTask from "./component/AddTask";
import TodoList from "./component/TodoList";
import { getTodos } from "./Blog_API";

export default async function Home() {
  const todos = await getTodos();
  //console.log(todos);
  return (
    <main className='bg-gray-200 flex flex-col justify-center items-center min-h-screen py-2'>
      <h1 className='text-4xl font-bold text-gray-600  '>
        ひとこと日記 ( Next.js & RailsAPI)
      </h1>
      <div className='w-full max-w-xl mt-5 '>
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg duration-500">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
