import { createContext, useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("post_lists")) || []
  );

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { width } = useWindowSize("");

  const navigate = useNavigate();

  useEffect(() => {
    const finalResult = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(finalResult);
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const title = postTitle;
    const datetime = format(new Date(), "MMMM dd, yyyy ,pp");
    const body = postBody;
    const newPostLayout = { id, title, datetime, body };
    const pushLayout = [...posts, newPostLayout];
    setPosts(pushLayout);
    localStorage.setItem("post_lists", JSON.stringify(pushLayout));
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  const handleEdit = (id) => {
    const title = editTitle;
    const datetime = format(new Date(), "MMMM dd, yyyy ,pp");
    const body = editBody;
    const upDatedPost = { id, title, datetime, body };
    const EditPostLayout = posts.map((post) =>
      post.id === id ? { ...upDatedPost } : post
    );
    setPosts(EditPostLayout);
    localStorage.setItem("post_lists", JSON.stringify(EditPostLayout));
    setEditTitle("");
    setEditBody("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const deleteLists = posts.filter((post) => post.id !== id);
    setPosts(deleteLists);
    navigate("/");
    localStorage.setItem("post_lists", JSON.stringify(deleteLists));
  };
  return (
    <DataContext.Provider
      value={{
        width,
        searchResults,
        search,
        setSearch,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        handleSubmit,
        posts,
        handleDelete,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        handleEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
