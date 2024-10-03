import React, { useState } from 'react';
import axios from 'axios'; 
import Header from './components/Header';
import styled from 'styled-components';
import MovieComponent from './components/MovieComponent';
import MovieInfo from './components/MovieInfo';

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;

const App = () => {
  const [movieList, setMovieList] = useState([]); // List of movies from search
  const [selectedMovie, setSelectedMovie] = useState(null); // Movie selected by the user

  const onMovieSelect = async (imdbID) => {
    const API_KEY = "71ea1253"; // Your API key
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
      setSelectedMovie(response.data); // Set the selected movie details
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header setMovieList={setMovieList} /> {/* Pass setMovieList to Header */}
      {selectedMovie ? (
        <MovieInfo movie={selectedMovie} /> // Show detailed movie info if selected
      ) : (
        <MovieListContainer>
          {movieList?.length
            ? movieList.map((movie) => (
                <MovieComponent
                  key={movie.imdbID}
                  movie={movie}
                  onMovieSelect={onMovieSelect} // Handle movie selection
                />
              ))
            : "Enter the movie Name"}
        </MovieListContainer>
      )}
    </div>
  );
};

export default App;
