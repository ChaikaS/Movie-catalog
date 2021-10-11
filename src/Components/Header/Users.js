import "./header.scss";
import user from "./img/user.png";
import triangle from "./img/black triangle.png";
export default function Users({ token }) {
  const handlerChange = (e) => {
    if (token) {
      e.preventDefault();
      console.log("12");
      window.location.reload();
    }
  };

  return (
    <div className="header__user">
      <img src={user} className="header__img-user" alt="user" /> {`${token.userFirstName} ${token.userLastName}`}
      <img src={triangle} className="header__img-triangle" onClick={handlerChange} title="Exit" alt="triangle" />
    </div>
  );
}
