import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "../store/movies/selectors";
import { useEffect } from "react";
import { fetchMovies } from "../store/movies/thunks";
import { Movie } from "../components/Movie";
import styled from "styled-components";

export const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies);
  }, [dispatch]);
  const movies = useSelector(selectMovies);

  return (
    <MoviesWrapper>
      {movies &&
        movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre.name}
            poster={movie.poster}
            raiting={movie.raiting}
            watched={movie.watched}
          />
        ))}
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;
