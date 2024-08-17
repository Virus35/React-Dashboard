import { DOMAIN, MOVIE_IMAGES, TMDM_MOVIES } from "../constants";
import { Movie, MovieResponse } from "../interface";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: TMDM_MOVIES.auth,
  },
};

export const fetchMovies = async (category=TMDM_MOVIES.movies): Promise<Array<Movie>> => {
  try {
    const resp = await fetch(category, API_OPTIONS);
    const jsonResp: MovieResponse = await resp.json();
    const movies: Array<string> = (jsonResp.results || []).map(
      (img) => `${DOMAIN}${img.backdrop_path}`
    );
    MOVIE_IMAGES.length = 0;
    MOVIE_IMAGES.push(...movies);
    return jsonResp.results;
  } catch (err) {
    alert(err);
    return [];
  }
};
