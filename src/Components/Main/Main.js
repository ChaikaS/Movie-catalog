import "./main.scss";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import SearchingResults from "./SearchingResults";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";

export default function Main({ searchMovieWord, setPageSelection, pageSelection, url }) {
  const [totalResults, setTotalResults] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoader] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (response) => {
          setMovies(response.Search);
          setIsLoader(true);
          setTotalResults(response.totalResults);
        },
        (error) => {
          setIsLoader(false);
          setError(error);
        }
      );
  }, [searchMovieWord, pageSelection]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <Preloader />
      </div>
    );
  } else if (!movies) {
    return (
      <div>
        <div className="main__movies-list-emrty">Please, type name of movie...</div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <SearchingResults searchMovieWord={searchMovieWord} totalResults={totalResults} />
        <MovieList movies={movies} />
        <Pagination totalResults={totalResults} setPageSelection={setPageSelection} />
      </div>
    );
  }
}
