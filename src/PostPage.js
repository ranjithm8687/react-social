import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editPost">Edit</button>
            </Link>
            <button
              className="deletePost"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
