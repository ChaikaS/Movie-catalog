import SiteName from "./SiteName";
import Search from "./Search";
import Users from "./Users";
import "./header.scss";

export default function Header({ user, searchMovieWord, setSearchMovieWord, token }) {
  return (
    <div className="header">
      <SiteName />
      <Search searchMovieWord={searchMovieWord} setSearchMovieWord={setSearchMovieWord} />
      <Users token={token} />
    </div>
  );
}
