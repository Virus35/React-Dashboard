export const DOMAIN = "https://image.tmdb.org/t/p/w500/";

export const MOVIE_IMAGES: Array<string> = [
  "https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
  "https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
  "https://image.tmdb.org/t/p/w500/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg",
  "https://image.tmdb.org/t/p/w500/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
  "https://image.tmdb.org/t/p/w500/58D6ZAvOKxlHjyX9S8qNKSBE9Y.jpg",
  "https://image.tmdb.org/t/p/w500/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg",
  "https://image.tmdb.org/t/p/w500/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg",
  "https://image.tmdb.org/t/p/w500/y6Z8aogJjuAk9rWVIl1xpV5GENt.jpg",
  "https://image.tmdb.org/t/p/w500/8yPSYhooj8nyBbmV3GVdLDwuE7e.jpg",
  "https://image.tmdb.org/t/p/w500/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
  "https://image.tmdb.org/t/p/w500/1wP1phHo2CROOqzv7Azs0MT5esU.jpg",
  "https://image.tmdb.org/t/p/w500/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
  "https://image.tmdb.org/t/p/w500/xYyPLClpJiA5pq687pGjRel5qgf.jpg",
  "https://image.tmdb.org/t/p/w500/c3rwwFFVbkyEI6wPtpPd9lvovPW.jpg",
  "https://image.tmdb.org/t/p/w500/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
  "https://image.tmdb.org/t/p/w500/aswBReNN2adqTiOBnvh96RCDeJP.jpg",
  "https://image.tmdb.org/t/p/w500/s5znBQmprDJJ553IMQfwEVlfroH.jpg",
];

export const TMDM_MOVIES = {
  auth: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGM1OTkwNGM4MWMyNTZjZjRiOWFhOTM0M2RjZDJkOCIsIm5iZiI6MTcyMzg3ODcyNS43NTU0MzksInN1YiI6IjY2YzA0YzM0MTMxMjI0ZDY1MmMzMGFiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ISuO-NaiaghOQL_iRbh01RWNeysciG3rdJzMbbJT1SY",
  movies:
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  popular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  "top-rated":
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  upcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};
