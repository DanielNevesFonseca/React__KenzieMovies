import { MoviesProvider } from "./providers/MoviesContext/MoviesContext";
import { UserProvider } from "./providers/UserContext/UserContext";
import { MainRoutes } from "./routes/MainRoutes";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <MoviesProvider>
        <UserProvider>
          <MainRoutes />
        </UserProvider>
      </MoviesProvider>
    </>
  );
};

export default App;
