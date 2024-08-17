import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../../utils/movieApi/movieApi";
import { DOMAIN, TMDM_MOVIES } from "../../../utils/constants";
import { Movie } from "../../../utils/interface";
import "./MovieCategories.scss";

const MovieCategories: React.FC = () => {
  const [movieCategory, setMovieCategory] = useState<Map<string, Array<Movie>>>(
    new Map()
  );

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const popular = await fetchMovies(TMDM_MOVIES.popular);
        const topRated = await fetchMovies(TMDM_MOVIES["top-rated"]);
        const upcoming = await fetchMovies(TMDM_MOVIES.upcoming);

        setMovieCategory((prev) => {
          const updatedMap = new Map(prev);
          updatedMap.set("popular", popular);
          updatedMap.set("top-rated", topRated);
          updatedMap.set("upcoming", upcoming);
          return updatedMap;
        });
      } catch (error) {
        alert(error);
      }
    };

    fetchMoviesData();
  }, []);

  const renderMovies = (category: string) => {
    const movies = movieCategory.get(category) || [];
    return movies.length ? (
      <ul>
        {movies.map((movie) => (
          <div key={movie.id} className="category">
            <li>{movie.title}</li>
            <img src={`${DOMAIN}${movie.backdrop_path}`} alt="category" />
          </div>
        ))}
      </ul>
    ) : (
      <p>No movies available</p>
    );
  };

  return (
    <div className="movie-categories">
      {Array.from(movieCategory.keys()).map((category) => (
        <div className="category" key={category}>
          <h2>
            {category.charAt(0).toUpperCase() +
              category.slice(1).replace("-", " ")}
          </h2>
          {renderMovies(category)}
        </div>
      ))}
    </div>
  );
};

export default MovieCategories;
