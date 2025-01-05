// src/services/githubService.js
import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  try {
    // Constructing the query string
    let query = `q=${username}`;  // Basic search query for the username

    // Add location filter if provided
    if (location) query += `+location:${location}`;

    // Add minimum repositories filter if provided
    if (minRepos) query += `+repos:>=${minRepos}`;

    // API endpoint for advanced search users
    const endpoint = `https://api.github.com/search/users?q=${query}`;

    // Make the GET request to GitHub API
    const response = await axios.get(endpoint);

    // Return the data from the response
    return response.data;

  } catch (error) {
    throw new Error('Error fetching user data');  // Handle API errors
  }
};

export default { fetchUserData };
