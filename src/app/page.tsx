import Image from "next/image";
import { getPosts } from "./Blog_API";
import Link from "next/link";
import PostList from "./PostList";
import EditPost from "./[id]/edit-post/page";
import DeletePost from "./delete-post/page";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <div>
        <h1>Rails&Next.jsブログ</h1>
        <Link href='/create-post'>投稿を作成</Link>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
          <Link href={`/${post.id}/edit-post`} >編集</Link>
          <DeletePost />
        </div>
      ))}
    </div>
  );
}
