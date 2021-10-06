import "./preloader.scss";
import preloader from "./img/Spinner-1s-200px.svg";

export default function Preloader() {
  return (
    <div className="preloader">
      <img src={preloader} />
    </div>
  );
}
