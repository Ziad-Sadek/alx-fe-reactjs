// src/services/githubService.js
import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `q=${username}`;  // Start with the username as the main search query
    if (location) query += `+location:${location}`;  // Add location filter if provided
    if (minRepos) query += `+repos:>=${minRepos}`;  // Add minimum repositories filter if provided
    
    // Call the GitHub Search API with the constructed query string
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data;  // Return the data from the API response
  } catch (error) {
    throw new Error('Error fetching user data');  // Handle errors
  }
};

export default { fetchUserData };
