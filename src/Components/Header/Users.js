import "./header.scss";

export default function Users({ user }) {
  return <div className="header__user">{`${user.firstName} ${user.lastName}`}</div>;
}
