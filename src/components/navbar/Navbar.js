import "./navbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useLogout } from "../../hooks/useLogout";
// import { useAuth } from "../../hooks/useAuth";
const navbarVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="navbar"
    >
      <Box sx={{ flexGrow: 1, backgroundColor: "secondary.main" }}>
        <AppBar position="static">
          <Toolbar>
            <div className="logo">
              <Link to="/">myNotes</Link>
            </div>

            <>
              {user ? (
                <>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: 3 }}
                  >
                    Welcome {user.displayName}
                  </Typography>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ marginRight: 3 }}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ marginRight: 3 }}
                  >
                    <Link to="/login">Login</Link>
                  </Button>

                  <Button
                    color="secondary"
                    variant="outlined"
                    sx={{ color: "#fff", borderColor: "#fff" }}
                  >
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </>
          </Toolbar>
        </AppBar>
      </Box>
    </motion.div>
  );
};

export default Navbar;
