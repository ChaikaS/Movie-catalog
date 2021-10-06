import "./header.scss";

export default function Search({ searchMovieWord, setSearchMovieWord }) {
  return (
    <div className="header__search">
      <input type="text" searchMovieWord={searchMovieWord} onChange={(e) => setSearchMovieWord(e.target.value)} className="header__search_input" placeholder="Type to search..." />
    </div>
  );
}
