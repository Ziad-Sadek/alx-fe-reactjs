import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch data from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Using the useQuery hook with additional configurations
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', 
    fetchPosts, 
    {
      cacheTime: 1000 * 60 * 10,  // Cache data for 10 minutes (in milliseconds)
      staleTime: 1000 * 60 * 5,   // Data is fresh for 5 minutes (in milliseconds)
      refetchOnWindowFocus: true, // Refetch when the window is focused
      keepPreviousData: true,     // Keep previous data while new data is being fetched
    }
  );

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {/* Button to refetch data */}
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
