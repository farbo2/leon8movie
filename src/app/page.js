"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState();

  const submitHandler = (query) => {
    if (query) {
      fetch(`http://omdbapi.com/?apikey=c9eb1bb2&s=${query}&type=movie`)
        .then((res) => res.json())
        .then((data) => setResults(data?.Search));
    }
  };
  console.log(query);
  return (
    <div className="main">
      <input
        placeholder="Movie Name"
        style={{
          borderWidth: 0,
          backgroundColor: "#282828",
          height: "2rem",
          textAlign: "center",
          color: "white",
          fontFamily: "monospace",
          fontSize: "1rem",
          outline: "none",
        }}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <button className="searchBtn" onClick={() => submitHandler(query)}>
        Search
      </button>
      {results &&
        results.map((result) => (
          <a href={`/${result.imdbID}`}>
            <div
              style={{
                color: "white",
                borderColor: "white",
                border: "solid",
                borderWidth: "1px",
                marginTop: "1rem",
                display: "flex",
                flexDirection: "row",
                padding: "0.7rem",
                fontSize: "1.1rem",
                height: "2.6rem",
              }}
              key={result.imdbID}
            >
              <img
                style={{ marginRight: "1rem", borderRadius: "20rem" }}
                src={result.Poster}
                width={40}
                height={40}
              ></img>
              <h6 style={{ marginTop: "0.7rem", textDecoration: "none" }}>
                {result.Title} - {result.Year}
              </h6>
            </div>
          </a>
        ))}
    </div>
  );
}
