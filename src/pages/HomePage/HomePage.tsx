import { MoviesList } from "../../components/MoviesList/MoviesList";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <TemplatePage>
      <main className={`${styles.main} container`}>
        <MoviesList />
      </main>
    </TemplatePage>
  );
};
