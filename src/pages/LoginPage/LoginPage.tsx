import { Link } from "react-router-dom";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { LoginForm } from "../../components/forms/LoginForm/LoginForm";
import styles from "./styles.module.scss";

export const LoginPage = () => {
  return (
    <TemplatePage>
      <section className={`${styles.sectionImg} container`}></section>
      <main className={`${styles.main} container`}>
        <section className={`${styles.loginSection}`}>
          <h1 className="title1">Login</h1>
          <LoginForm />
          <div className={`${styles.registerBox}`}>
            <span className="text">or</span>
            <Link to={"/register"}>Sign-up</Link>
          </div>
        </section>
      </main>
    </TemplatePage>
  );
};
