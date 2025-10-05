import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";

export default async function PaintballPostsIdPage({ params }) {
  const postId = params.postId;

  const postsQuery = await db.query(
    `SELECT title, content FROM paintballposts WHERE id = $1`,
    [postId]
  );
  const paintballposts = postsQuery.rows[0];

  if (!paintballposts) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h2>{paintballposts.id}</h2>
      <h3>{paintballposts.title}</h3>
      <h3>{paintballposts.content}</h3>
    </div>
  );
}
