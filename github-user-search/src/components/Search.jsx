// src/components/Search.jsx
import React, { useState } from 'react';
import githubService from '../services/githubService';  // Importing API service

const Search = () => {
  const [username, setUsername] = useState('');  // State for input field
  const [userData, setUserData] = useState(null); // State to store user data from API
  const [loading, setLoading] = useState(false);  // State for loading status
  const [error, setError] = useState(''); // State for error message

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);  // Clear previous user data before fetching new data
    try {
      const data = await githubService.fetchUserData(username); // Fetch data from API
      setUserData(data); // Update user data state with the fetched data
    } catch (err) {
      setError('Looks like we cant find the user'); // Set error if API fails
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}  {/* Display the error message exactly as requested */}
      {userData && !loading && !error && (
        <div>
          <h3>{userData.name}</h3>
          <p>login: {userData.login}</p>  {/* Display GitHub login exactly as requested */}
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
