import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import getMovies, { imageBaseURL } from "./axios";
import "./Row.css";

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const getMovie = async () => {
      const promise = await getMovies(url);
      setMovies(promise.data.results);
      return promise;
    };
    getMovie();
  }, [url]);

  const onClickPlayTrailer = (movie) => {
    console.log("inside on click iamge");
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log("url", url);
          // return false;
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie, index) => {
            return (
              <img
                key={movie.id}
                className={`movie-image${isLargeRow ? "Large" : ""}`}
                src={`${imageBaseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.backdrop_path}
                onClick={() => onClickPlayTrailer(movie)}
              />
            );
          })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
