import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const EditPost = () => {
  const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="PostPage">
      <article>
        {post && (
          <>
            <h2>Edit Post</h2>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="editTitle">Title</label>
              <input
                type="text"
                id="editTitle"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <label htmlFor="editCom"> Comments </label>
              <textarea
                name="editCom"
                id="editCom"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              ></textarea>
              <button
                className="updateButton"
                type="submit"
                onClick={() => handleEdit(post.id)}
              >
                UpDate
              </button>
            </form>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>
              Please Visit our <Link to={"/"}>Home Page</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default EditPost;
