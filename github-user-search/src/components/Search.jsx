// src/components/Search.jsx
import React, { useState } from 'react';
import githubService from '../services/githubService';  // Importing API service

const Search = () => {
  const [username, setUsername] = useState('');  // State for username input
  const [location, setLocation] = useState('');  // State for location input
  const [minRepos, setMinRepos] = useState(0);  // State for minimum repositories input
  const [userData, setUserData] = useState(null); // State to store user data from API
  const [loading, setLoading] = useState(false);  // State for loading status
  const [error, setError] = useState(''); // State for error message

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);  // Clear previous user data before fetching new data
    try {
      const data = await githubService.fetchUserData(username, location, minRepos); // Fetch data from API
      setUserData(data); // Update user data state with the fetched data
    } catch (err) {
      setError('Looks like we cant find the user'); // Set error if API fails
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Location (Optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>
      
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}  {/* Display the error message exactly as requested */}
      
      {userData && !loading && !error && (
        <div className="mt-4">
          {userData.items.map((user) => (
            <div key={user.id} className="border p-4 rounded-md mb-4">
              <h3 className="font-bold text-xl">{user.login}</h3>
              <p>Location: {user.location || 'Not Provided'}</p>
              <p>Repositories: {user.public_repos}</p>
              <img src={user.avatar_url} alt="User Avatar" width="100" className="rounded-full" />
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View GitHub Profile</a>
              </p>
            </div>
          ))}

          {/* Pagination (if more than one page of results) */}
          {userData.total_count > 30 && (
            <div className="mt-4 text-center">
              <button className="p-2 bg-blue-500 text-white rounded-md">
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
