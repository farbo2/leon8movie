"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
function movie({ params }) {
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=c9eb1bb2&i=${params.movieId}`)
      .then((res) => res.json())
      .then((data) => setMovieInfo(data));
  }, []);
  return (
    <>
      <div className="movieScreen">
        <iframe
          src={`https://vidsrc.to/embed/movie/${params.movieId}`}
          width="90%"
          height={400}
          frameBorder="0"
        ></iframe>
      </div>

      <div className="movieTextWrapper">
        <div>
          <h2>
            {movieInfo?.Title} ({movieInfo?.Year})
          </h2>
          <span style={{ fontSize: "0.7rem" }}>
            <p>Duration: {movieInfo?.Runtime}</p>
            <p>Director: {movieInfo?.Director}</p>
            <p>Genre: {movieInfo?.Genre}</p>
            <p>Plot: {movieInfo?.Plot}</p>
          </span>
        </div>
        <img src={movieInfo?.Poster}></img>
      </div>
    </>
  );
}

export default movie;
