import Image from "next/image";
import { getPosts } from "./Blog_API";
import Link from "next/link";
import PostList from "./PostList";




export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h1>こちらはブログアプリです</h1>
      <PostList posts={posts}/>
    </div>
  )
}
