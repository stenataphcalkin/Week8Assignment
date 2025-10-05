import pg from "pg";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  });

  const posts = (await db.query(`SELECT * FROM paintballposts`)).rows;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            {/* <p>{post.content}</p> */}
            {/* <p>Category: {post.category}</p> */}
            ------
          </li>
        ))}
      </ul>
    </div>
  );
}