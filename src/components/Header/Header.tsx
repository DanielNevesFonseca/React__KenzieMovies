import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo-kenzie-movies.svg";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext/UserContext";
import { useContext } from "react";
import { BiExit } from "react-icons/bi";

export const Header = () => {
  const { userData, logout } = useContext(UserContext);

  return (
    <header className={`${styles.header} container`}>
      <Link to={"/"}>
        <img src={Logo} alt="Kenzie Movies Logo" />
      </Link>
      <div className={`${styles.dynamicBox}`}>
        {userData ? (
          <>
            <div className={`${styles.firstLetterName}`}>
              <p>{userData?.name[0]}</p>
            </div>
            <p className={`${styles.fullName}`}>{userData?.name}</p>
            <button
              onClick={() => {
                logout();
              }}
              title="Logout"
            >
              <BiExit size={32} />
            </button>
          </>
        ) : (
          <>
            <Link className={`link`} to={"/register"}>
              Register
            </Link>
            <Link className={`${styles.loginButton} btn-md`} to={"/login"}>
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
