import React, { useState } from 'react';
import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.3s ease;
`;

// Adjusted image styles for better fit
const CoverImg = styled.img`
  height: 400px; // Adjust to your desired height
  width: 100%;
  object-fit: contain; // Use "contain" to ensure the whole image fits
  border-radius: 5px;
  transition: transform 0.3s ease;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MovieComponent = ({ movie, onMovieSelect }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
    onMovieSelect(movie.imdbID);
  };

  return (
    <MovieContainer>
      <CoverImg
        src={movie.Poster}
        alt={movie.Title}
        onClick={handleImageClick}
        isClicked={isClicked}
      />
      <MovieName>{movie.Title}</MovieName>
    </MovieContainer>
  );
};

export default MovieComponent;
