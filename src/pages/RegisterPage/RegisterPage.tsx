import { Link } from "react-router-dom";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { FiArrowLeft } from "react-icons/fi";
import { RegisterForm } from "../../components/forms/RegisterForm/RegisterForm";
import styles from "./styles.module.scss";

export const RegisterPage = () => {
  return (
    <TemplatePage>
      <main className={`${styles.main} container`}>
        <section className={`${styles.registerSection}`}>
          <div>
            <h1 className="title1">Register</h1>
            <Link className="link" to={"/login"}>
              <FiArrowLeft size={24} />
              Back
            </Link>
          </div>
          <p className="text">Fill the fields below to register</p>
          <RegisterForm />
        </section>
      </main>
    </TemplatePage>
  );
};
