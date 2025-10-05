import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pg from "pg";
//------------------------------------------------------------

export default function CommentForm({ postId }) {
  async function handleCommentSave(formData) {
    "use server";

    const name = formData.get("commenter_name");
    const content = formData.get("commenter_content");
    const postIdFromForm = formData.get("post_id");

    if (!name || !content || !postIdFromForm) {
      console.error("Missing input(s)");
      return;
    }

    try {
      await db.query(
        `INSERT INTO paintballcomments (post_id, commenter_name, comment_content) VALUES ($1, $2, $3)`,
        [postIdFromForm, name, content]
      );

      revalidatePath(`/posts/${postIdFromForm}`);
    } catch (error) {
      console.error("Error unable to save to database:", error);
      return;
    }

    redirect(`/posts/${postIdFromForm}`);
  }

  //------------------------------------------------------------
  return (
    <form action={handleCommentSave}>
      <h3>Share your thoughts, leave a comment!</h3>

      <input type="hidden" name="post_id" value={postId} />

      <div>
        <label htmlFor="commenter_name">Name: </label>
        <input
          name="commenter_name"
          type="text"
          required
          maxLength={50}
          style={{
            border: "solid",
            color: "white",
            margin: "4px 4px",
          }}
        />
      </div>

      <div>
        <label htmlFor="commenter_content">Comment: </label>
        <textarea
          id="commenter_content"
          name="commenter_content"
          required
          rows="4"
          style={{
            border: "solid",
            color: "white",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "4px 8px",
          fontSize: "0.6em",
          color: "green",
          border: "solid",
          cursor: "pointer",
        }}
      >
        Submit Comment
      </button>
    </form>
  );
}
