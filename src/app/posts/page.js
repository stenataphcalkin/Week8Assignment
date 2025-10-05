import { Pool } from "pg";
import Link from "next/link";
// ------------------------------------------------------------------

const db = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});

// ------------------------------------------------------------------

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
    <>
      <div>
        <h1>Posts from the Field Shop</h1>

        <div className="sort">
          <Link
            className="alph"
            href={`${currentPath}?sort=asc`}
            style={{ fontSize: "0.6em" }}
          >
            Sort alphabetically /{" "}
          </Link>

          <Link
            className="rev-alph"
            href={`${currentPath}?sort=desc`}
            style={{ fontSize: "0.6em" }}
          >
            Sort by reverse alphabetically
          </Link>
        </div>

        <div
          className="posts-list"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          {paintballposts.map((post) => (
            <div
              className="blog-title-container"
              key={post.id}
              style={{ padding: "10px 0" }}
            >
              <Link className="blog-title" href={`/posts/${post.id}`}>
                {post.title}{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
