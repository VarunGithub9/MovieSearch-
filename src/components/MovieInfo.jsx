import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #2c2c2c;
  box-shadow: 0 3px 10px 0 #aaa;
  margin: 20px;
  border-radius: 8px;
`;

const CoverImg = styled.img`
  height: 500px;
  object-fit: cover;
  width: 400px;
  margin-bottom: 20px;
`;

const MovieInfo = ({ movie }) => {
  return (
    <InfoContainer>
      <CoverImg src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>IMDB ID:</strong> {movie.imdbID}</p>
      <p><strong>Type:</strong> {movie.Type}</p>
    </InfoContainer>
  );
};

export default MovieInfo;
