import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const { postTitle, setPostTitle, postBody, setPostBody, handleSubmit } =
    useContext(DataContext);
  return (
    <main className="NewPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="newPost">Post</label>
        <input
          type="text"
          id="newPost"
          placeholder="New Post"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="comment">Comments</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="New Comments"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button className="newPostButton" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
