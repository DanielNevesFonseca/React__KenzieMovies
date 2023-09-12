import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo-kenzie-movies.svg";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link to={"/"}>
        <img src={Logo} alt="Kenzie Movies Logo" />
      </Link>
      <div>
        <p className="text">Condicional de user</p>
      </div>
    </header>
  );
};
