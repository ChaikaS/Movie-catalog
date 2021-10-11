import "../App/App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";

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
    <Router>
      <Redirect to="/app" />
      <div className="wrapper">
        <Route path="/app" render={() => <Header searchMovieWord={searchMovieWord} setSearchMovieWord={setSearchMovieWord} token={token} />} />
        <Route path="/app" render={() => <Main searchMovieWord={searchMovieWord} setPageSelection={setPageSelection} pageSelection={pageSelection} url={url} />} />
      </div>
    </Router>
  );
}

export default App;
