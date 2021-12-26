import React, { useEffect, useState } from "react";
import getMovies, { imageBaseURL } from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      const data = await getMovies(request.fetchNetflixOriginals);
      console.log(data);
      const randomMovie =
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ];
      setMovie(randomMovie);
      console.log(randomMovie);
      //   return randomMovie;
    };
    fetchBanner();
  }, []);
  const truncateString = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageBaseURL}${movie?.poster_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.title || movie?.name}</h1>
        <div className="banner-btns">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h2 className="banner-description">
          {truncateString(movie?.overview, 150)}
        </h2>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
