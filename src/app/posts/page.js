import { Pool } from "pg";
import Link from "next/link";

const db = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});

export default async function PostsPage({ searchParams }) {
  const sort = searchParams.sort === "desc" ? "desc" : "asc";

  const query = await db.query(`
    SELECT id, title 
    FROM paintballposts
    ORDER BY title ${sort}
  `);

  const paintballposts = query.rows;

  const currentPath = "/posts";

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {paintballposts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
