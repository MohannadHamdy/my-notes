import "./login.scss";
import { motion } from "framer-motion";
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Alert,
  Collapse,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import CloseIcon from "@mui/icons-material/Close";
import { Navigate } from "react-router-dom";
const formVariants = {
  hidden: {
    opacity: 0,
    //  x: "-180vw",
  },
  visible: {
    opacity: 1,
    //  x: 0,
    transition: {
      delay: 0.7,
      stiffness: 100,
      type: "spring",
      duration: 0.3,
    },
  },
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const { loading, error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <motion.div variants={formVariants} initial="hidden" animate="visible">
      <Container maxWidth="md" align="center">
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ margin: "2em 0" }}
          align="center"
        >
          Login
        </Typography>

        <Box
          sx={{
            width: 300,
            height: 300,
          }}
        >
          <form className="loginForm" onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
            >
              {loading ? <CircularProgress /> : "Login"}
            </Button>
          </form>
          {error && (
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mt: 2, mb: 2, width: 270 }}
                severity="error"
              >
                {error}
              </Alert>
            </Collapse>
          )}
        </Box>
      </Container>
    </motion.div>
  );
};

export default Login;
