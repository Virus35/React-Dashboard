import React from "react";
import { MOVIE_IMAGES } from "../../../utils/constants";
import "./PreviewContainer.scss";
interface PreviewContainerProps {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  movies: string[];
  currentImage: number;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({
  setIsPlaying,
  isPlaying,
  movies,
  currentImage,
}) => {
  return (
    <div className="slideshow-container">
      {movies.length ? (
        <>
          <img
            src={MOVIE_IMAGES[currentImage]}
            alt="Movie Slideshow"
            className="slideshow-image"
          />
          <div className="slideshow-content">
            <h4>Movies Preview</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ex facere explicabo alias eos molestiae consectetur dignissimos
              minima, adipisci modi?
            </p>
            <div>
              <button
                onClick={() => {
                  setIsPlaying((prev) => !prev);
                }}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="no-preview">No Preview Exists</div>
      )}
    </div>
  );
};

export default PreviewContainer;
