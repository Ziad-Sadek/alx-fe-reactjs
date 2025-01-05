import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data.items);
      setLoading(false);
    } catch (error) {
      setError('Looks like we cant find the user');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <div>
          <label htmlFor="username" className="block text-lg">GitHub Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-lg">Location (Optional)</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-lg">Minimum Repositories (Optional)</label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum number of repositories"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="mt-6">
        {userData.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold">Results:</h2>
            <ul className="space-y-4">
              {userData.map((user) => (
                <li key={user.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <div className="flex items-center">
                    <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                      <h3 className="font-bold">{user.login}</h3>
                      {user.location && <p>{user.location}</p>}
                      <p>Repositories: {user.public_repos}</p>
                      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
