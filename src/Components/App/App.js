import "../App/App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
function App() {
  const [token, setToken] = useState();
  const [searchMovieWord, setSearchMovieWord] = useState("");
  const [pageSelection, setPageSelection] = useState(1);
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchMovieWord}&page=${pageSelection}`;
  if (!token) {
    return (
      <div className="wrapper-loginPage">
        <LoginPage setToken={setToken} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Header searchMovieWord={searchMovieWord} setSearchMovieWord={setSearchMovieWord} token={token} />
      <Main searchMovieWord={searchMovieWord} setPageSelection={setPageSelection} pageSelection={pageSelection} url={url} />
    </div>
  );
}

export default App;
