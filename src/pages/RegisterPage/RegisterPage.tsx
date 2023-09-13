import { Link } from "react-router-dom";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { FiArrowLeft } from "react-icons/fi";
import { RegisterForm } from "../../components/forms/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  return (
    <TemplatePage>
      <main>
        <section>
          <div>
            <h1 className="title1">Cadastro</h1>
            <Link className="link" to={"/login"}>
              <FiArrowLeft size={24} />
              Voltar
            </Link>
          </div>
          <p className="text">Preencha os campos para cadastrar-se</p>
          <RegisterForm/>
        </section>
      </main>
    </TemplatePage>
  );
};
