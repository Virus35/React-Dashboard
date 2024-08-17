import React, { useEffect, useState } from "react";
import "./Browse.scss";
import { fetchMovies } from "../../utils/movieApi/movieApi";
import { MOVIE_IMAGES } from "../../utils/constants";
import PreviewContainer from "./preview-container/PreviewContainer";
import MovieCategories from "./movie-categories/MovieCategories";

const Browse: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [movies, setMovies] = useState([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Fetch movies on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies();
      if (data?.length) {
        setMovies(data);
      }
    };
    fetchData();
  }, []);

  // Handle the slideshow interval
  useEffect(() => {
    if (isPlaying && movies.length) {
      const id = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === MOVIE_IMAGES?.length - 1 ? 0 : prevImage + 1
        );
      }, 2000);
      setIntervalId(id);

      // Cleanup interval on component unmount or when paused
      return () => clearInterval(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [isPlaying, movies]);

  return (
    <div className="parent-container">
      <PreviewContainer
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        movies={movies}
        currentImage={currentImage}
      />
      {movies && movies?.length ? (
        <MovieCategories />
      ) : (
        <span className="no-preview"> No Movie Exists</span>
      )}
    </div>
  );
};

export default Browse;
