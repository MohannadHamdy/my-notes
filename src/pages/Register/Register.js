import "./register.scss";
import { motion } from "framer-motion";
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Alert,
  Collapse,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import useRegister from "../../hooks/useRegister";
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
const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, success, registerUser } = useRegister();
  const [open, setOpen] = useState(true);

  const registerHandler = (e) => {
    e.preventDefault();
    registerUser(displayName, email, password);
    setDisplayName("");
    setEmail("");
    setPassword("");
    setUserRole("");
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
          Register
        </Typography>

        <Box
          sx={{
            width: 300,
            height: 400,
          }}
        >
          <form className="signupForm" onSubmit={registerHandler}>
            <FormControl fullWidth>
              <TextField
                id="displayName"
                label="Display Name"
                variant="outlined"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl fullWidth sx={{ textAlign: "left" }}>
              <InputLabel id="demo-simple-select-label">User Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userRole}
                label="User Role"
                onChange={(e) => setUserRole(e.target.value)}
                required
              >
                <MenuItem value="super">Super Admin</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
              disabled={loading}
            >
              {loading ? <CircularProgress /> : "Register"}
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
                sx={{ mb: 2, width: 330 }}
                severity="error"
              >
                {error}
              </Alert>
            </Collapse>
          )}
          {success && (
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
                sx={{ mb: 2, width: 330 }}
                severity="success"
              >
                This is a success message!
              </Alert>
            </Collapse>
          )}

          {/* <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Note archived"
  action={action}
/> */}
        </Box>
      </Container>
    </motion.div>
  );
};

export default Register;
