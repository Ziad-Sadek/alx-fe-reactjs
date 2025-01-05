import axios from "axios";

// Function to fetch user data based on username
const fetchUserData = async (username) => {
  try {
    // API endpoint for fetching a GitHub user's data by username
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the user data from the API response
  } catch (error) {
    throw new Error("User not found");
  }
};

export default { fetchUserData };
