// src/components/Search.jsx
import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data); 
    } catch (err) {
      setError('Looks like we can\'t find the user');
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
      {error && <p>{error}</p>}
      {userData && !loading && !error && (
        <div>
          <h3>{userData.name}</h3>
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
