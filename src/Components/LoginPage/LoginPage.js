import { useState } from "react";
import "./loginPage.scss";

export default function LoginPage({ setToken }) {
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [password, setPassword] = useState();

  const handlerSubmit = (e) => {
    if (userFirstName && userLastName && password) {
      e.preventDefault();
      setToken({ userFirstName, userLastName, password });
    }
  };

  return (
    <form className="loginPage__form" onSubmit={handlerSubmit}>
      <div className="loginPage__form_text">
        <span>registration</span>
      </div>

      <div className="loginPage__form_input">
        <input type="text" onChange={(e) => setUserFirstName(e.target.value)} placeholder="First name"></input>
      </div>
      <div className="loginPage__form_input">
        <input type="text" onChange={(e) => setUserLastName(e.target.value)} placeholder="Last name"></input>
      </div>

      <div className="loginPage__form_input">
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
      </div>
      <div className="loginPage__form_button">
        <button>Enter</button>
      </div>
    </form>
  );
}
