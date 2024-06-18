import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../videoplayer/VideoPlayer';

const SearchResult = ({ inputValue }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [showVideo, setShowVideo] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (inputValue) {
          const formData = new FormData();
          formData.append('search_query', inputValue);

          const response = await axios.post('http://localhost:5003/search', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          setSearchResults(response.data.results);
          setError(null);
          setShowVideo({}); // Hide all videos initially
        } else {
          // Clear search results and error when input value is empty
          setSearchResults([]);
          setError(null);
        }
      } catch (error) {
        setSearchResults([]);
        setError(error.message);
      }
    };

    fetchData();
  }, [inputValue]);

  const handleGetVideo = (index) => {
    setShowVideo(prevState => ({ ...prevState, [index]: true })); // Show video for the specific result
  };

  return (
    <div>
      {error && <div>Error: {error}</div>}
      
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {searchResults.map((result, index) => (
            <div key={index}>
              <p>File Name: {result.file_name}</p>
              <p>Category List: {result.category_list}</p>
              <p>File Path: {result.file_path}</p>
              <button onClick={() => handleGetVideo(index)}>Get Video</button>
              {showVideo[index] && <VideoPlayer videoPath={result.file_path} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
