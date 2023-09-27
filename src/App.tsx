import { SkeletonTheme } from "react-loading-skeleton";
import { MoviesProvider } from "./providers/MoviesContext/MoviesContext";
import { UserProvider } from "./providers/UserContext/UserContext";
import { MainRoutes } from "./routes/MainRoutes";
import "./styles/index.scss";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  return (
    <>
      <SkeletonTheme baseColor="#272727" highlightColor="#3D3D3D">
        <UserProvider>
          <MoviesProvider>
            <MainRoutes />
          </MoviesProvider>
        </UserProvider>
      </SkeletonTheme>
    </>
  );
};

export default App;
