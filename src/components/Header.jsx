import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = "71ea1253"; // Your API key
const Header = ({ setMovieList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeoutID, setTimeoutID] = useState(null);

  const fetchData = async (searchString) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
      setMovieList(response.data.Search); // Update movie list with search results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      if (value) {
        fetchData(value);
      }
    }, 500);
    setTimeoutID(timeout);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Movie</h1>
      <div className="flex items-center">
        <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px", color: "black", backgroundColor: "white" }} // Custom inline CSS
        />
      </div>
    </header>
  );
};

export default Header;
