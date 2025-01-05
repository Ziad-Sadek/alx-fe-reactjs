import React, { useState } from "react";
import githubService from "../services/githubService"; // Import the githubService

const Search = () => {
  // State for the search term, user data, loading, and error
  const [username, setUsername] = useState(""); // Search input
  const [userData, setUserData] = useState(null); // Store fetched user data
  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(""); // State to track error

  // Handle input change in the search field
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission to fetch user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while fetching data
    setError(""); // Reset any previous error message

    try {
      // Call the fetchUserData function from githubService to get data
      const data = await githubService.fetchUserData(username);
      setUserData(data); // Set the fetched data
    } catch (err) {
      // If there's an error, set the error state
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false); // Reset loading state once the API call is complete
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="Avatar" className="avatar" />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
