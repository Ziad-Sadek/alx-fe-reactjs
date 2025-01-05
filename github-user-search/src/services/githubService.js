// src/services/githubService.js
import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the data from the API response
  } catch (error) {
    throw new Error('User not found'); // Handle any error
  }
};

export default { fetchUserData };
