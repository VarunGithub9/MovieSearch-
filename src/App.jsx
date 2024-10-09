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
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const onMovieSelect = async (imdbID) => {
    const API_KEY = "71ea1253";
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleSearch = (movies) => {
    setMovieList(movies); 
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header setMovieList={handleSearch} />
      
      {selectedMovie ? (
        <>
          <button
            onClick={() => setSelectedMovie(null)} 
            style={{
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "5px",
              margin: "20px",
              cursor: "pointer"
            }}
          >
            Back to Search Results
          </button>
          <MovieInfo movie={selectedMovie} />
        </>
      ) : (
        <MovieListContainer>
          {movieList?.length
            ? movieList.map((movie) => (
                <MovieComponent
                  key={movie.imdbID}
                  movie={movie}
                  onMovieSelect={onMovieSelect}
                />
              ))
            : "Enter a movie name to search"}
        </MovieListContainer>
      )}
    </div>
  );
};

export default App;
