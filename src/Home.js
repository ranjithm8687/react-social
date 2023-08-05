import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults, search, setSearch } = useContext(DataContext);
  return (
    <>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="Search Post"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <main className="Home">
        {searchResults.length ? (
          <Feed searchResults={searchResults} />
        ) : (
          <p style={{ marginTop: "3rem" }}>
            No Post To Display Please click Post button Create New Post
          </p>
        )}
      </main>
    </>
  );
};

export default Home;
