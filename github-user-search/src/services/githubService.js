import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  const query = `type:user+in:login ${username} location:${location ? location : ''} repos:>=${minRepos}`;
  const url = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from GitHub');
  }
};

export { fetchUserData };
