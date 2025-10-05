import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function paintballpostsIdPage({ params }) {
  const paintballpostsId = params.paintballpostsId;

  const query = await db.query(
    `SELECT id, title, content, category FROM paintballposts WHERE id = $1`,
    [paintballpostsId]
  );

  const paintballposts = query.rows[0];

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
