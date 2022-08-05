import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Create from "./pages/Create/Create";
import Single from "./pages/Single/Single";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAuthContext } from "./hooks/useAuthContext";
//authIsReady
const App = () => {
  const { authIsReady, user } = useAuthContext();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3d5a80",
      },
      secondary: {
        main: "#2e2e2e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {authIsReady && (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  user ? <Home /> : <Navigate to="/login" replace={true} />
                }
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" replace={true} /> : <Login />}
              />
              <Route
                path="/register"
                element={
                  user ? <Navigate to="/" replace={true} /> : <Register />
                }
              />
              <Route
                path="/single"
                element={
                  user ? <Single /> : <Navigate to="/login" replace={true} />
                }
              />
              <Route
                path="/create"
                element={
                  user ? <Create /> : <Navigate to="/login" replace={true} />
                }
              />
            </Routes>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
