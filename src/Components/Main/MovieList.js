import "./main.scss";

export default function MovieList({ movies }) {
  return (
    <div className="main__movies-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="main__post ">
          <img
            src={movie.Poster}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://pbs.twimg.com/profile_images/1059763814131003392/E8hJgr1b.jpg";
            }}
            alt="movie"
          ></img>
          <div>Name: {movie.Title}</div>
          <div>Year: {movie.Year}</div>
          <div>imdbID: {movie.imdbID}</div>
          <div>Type: {movie.Type}</div>
        </div>
      ))}
    </div>
  );
}
