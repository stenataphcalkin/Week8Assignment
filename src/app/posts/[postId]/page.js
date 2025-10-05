import { db } from "@/utils/dbConnection";
import CommentForm from "@/components/Form";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Image from "next/image";
// ------------------------------------------------------------------

async function deleteCommentAction(formData) {
  "use server";

  const commentId = formData.get("commentId");
  const postId = formData.get("postId");

  if (!commentId || !postId) {
    console.error("Missing commentId / postId.");
    return;
  }

  try {
    await db.query(`DELETE FROM paintballcomments WHERE id = $1`, [commentId]);
    console.log(`Comment ${commentId} has now been removed.`);

    revalidatePath(`/posts/${postId}`);
  } catch (error) {
    console.error("Currently unable to delete. Try again later.", error);
  }
}
// ------------------------------------------------------------------

export default async function PaintballPostsIdPage({ params }) {
  const postId = params.postId;

  // Articles --------------------------------------------
  const postsQuery = await db.query(
    `SELECT id, title, content FROM paintballposts WHERE id = $1`,
    [postId]
  );
  const paintballposts = postsQuery.rows[0];

  if (!paintballposts) {
    return <div>Post not found. Their camo is too good.</div>;
  }

  // Comments --------------------------------------------
  const commentsQuery = await db.query(
    `SELECT id, commenter_name, comment_content FROM paintballcomments WHERE post_id = $1 ORDER BY id DESC`,
    [postId]
  );
  const paintballcomments = commentsQuery.rows;

  // Page returns ------------------------------------------------------------------
  return (
    <div className="blog-area" style={{ paddingTop: "10px" }}>
      <h2 className="blog-title">{paintballposts.title}</h2>
      <br />
      {/* ------------------------------ */}

      <div
        className="blog-post"
        style={{ paddingLeft: "40px", paddingRight: "40px" }}
      >
        <p>{paintballposts.content}</p>
        <br />
      </div>

      {/* ------------------------------ */}
      <div className="comment-form">
        <CommentForm postId={postId} />
        <br />
      </div>

      {/* ------------------------------ */}
      <div className="commentCard">
        <h4>Visitor Comments ({paintballcomments.length})</h4>
        {paintballcomments.length > 0 ? (
          <ul>
            {paintballcomments.map((comment) => (
              <li key={comment.id} style={{ marginBottom: "10px" }}>
                <p>
                  <strong>{comment.commenter_name}:</strong>{" "}
                  {comment.comment_content}
                </p>

                {/* DLETE FUNCTION {/* ------------------------------ */}
                <form action={deleteCommentAction}>
                  <input type="hidden" name="commentId" value={comment.id} />
                  <input type="hidden" name="postId" value={postId} />
                  <button
                    type="submit"
                    style={{
                      padding: "0px 2px",
                      fontSize: "0.6em",
                      color: "red",
                      border: "solid",
                      borderWidth: "2px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </form>
              </li>
            ))}
          </ul>
        ) : (
          <p>Everyone must be at the field, theres no comments yet!</p>
        )}
      </div>
    </div>
  );
}
