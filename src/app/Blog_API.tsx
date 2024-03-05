import { Todo } from "./type";

const API_ENDPOINT =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://127.0.0.1:3001";

//記事一覧取得
export const getTodos = async ():Promise<Todo[]> => {
  const res = await fetch(`${API_ENDPOINT}/api/v1/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const Todos = await res.json();
  return Todos;
};

//記事詳細取得
export const getDetailTodo = async(id:string):Promise<Todo> => {
  const res = await fetch(`${API_ENDPOINT}/api/v1/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const Todos = await res.json();
  return Todos;
};

//記事投稿
export const createTodo = async(title:string,content:string):Promise<Todo> => {
  
  const res = await fetch(`${API_ENDPOINT}//api/v1/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const newTodo = await res.json();
  return newTodo;
};

//記事削除
export const deleteTodo = async(id:string):Promise<void> => {
  
  const res = await fetch(`${API_ENDPOINT}/api/v1/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

};

//記事編集
export const editTodo = async(id:string,title:string,content:string):Promise<Todo> => {
  
  const res = await fetch(`${API_ENDPOINT}/api/v1/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });


  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const editTodo = await res.json();
  return editTodo;
};