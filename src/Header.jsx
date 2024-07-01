import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/" onClick={() => (document.title = "Amer Movie app")}>
          <img src={logo} />
        </Link>
        <ul>
          <li>
            <Link
              to="/movies"
              onClick={() => (document.title = "Movies - Amer")}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/tv-shows"
              onClick={() => (document.title = "TV Shows - Amer")}
            >
              TV Shows
            </Link>
          </li>
          <li>
            <Link
              to="suggest"
              onClick={() => (document.title = "Suggest - Amer")}
            >
              Suggest me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
