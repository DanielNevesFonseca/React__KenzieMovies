import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ITemplatePageProps } from "./@types";

export const TemplatePage = ({ children }: ITemplatePageProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
