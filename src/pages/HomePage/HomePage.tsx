import { useContext } from "react";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { HomePageSkeleton } from "../../components/skeletons/HomePageSkeleton/HomePageSkeleton";
import styles from "./styles.module.scss";
import { MoviesContext } from "../../providers/MoviesContext/MoviesContext";

export const HomePage = () => {
  const { isMoviesListLoading } = useContext(MoviesContext);

  return (
    <TemplatePage>
      <main className={`${styles.main} container`}>
        {isMoviesListLoading ? (
          <>
            <HomePageSkeleton />
          </>
        ) : (
          <MoviesList />
        )}
      </main>
    </TemplatePage>
  );
};
