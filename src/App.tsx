import { MoviesProvider } from "./providers/MoviesContext/MoviesContext";
import { UserProvider } from "./providers/UserContext/UserContext";
import { MainRoutes } from "./routes/MainRoutes";

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
