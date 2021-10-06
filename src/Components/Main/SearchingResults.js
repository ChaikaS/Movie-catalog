import "./main.scss";

export default function SearchingResults({ searchMovieWord, totalResults }) {
  return (
    <div className="main__search-result">
      You searched for: {`${searchMovieWord}`}, {`${totalResults}`} results found
    </div>
  );
}
