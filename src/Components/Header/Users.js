import "./header.scss";

export default function Users({ token }) {
  return <div className="header__user">{`${token.userFirstName} ${token.userLastName}`}</div>;
}
