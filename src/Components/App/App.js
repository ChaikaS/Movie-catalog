import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useEffect, useState } from "react";

const user = {
  firstName: "Sergei",
  lastName: "Chaikovsky",
};

function App() {
  const [searchMovieWord, setSearchMovieWord] = useState("");
  const [pageSelection, setPageSelection] = useState(1);
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchMovieWord}&page=${pageSelection}`;

  return (
    <div className="wrapper">
      <Header user={user} searchMovieWord={searchMovieWord} setSearchMovieWord={setSearchMovieWord} />
      <Main searchMovieWord={searchMovieWord} setPageSelection={setPageSelection} pageSelection={pageSelection} url={url} />
    </div>
  );
}

export default App;
