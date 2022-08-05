import "./login.scss";
import { motion } from "framer-motion";
import { Typography, Container, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
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
          <form className="loginForm">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
            />

            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
            <Button
              color="secondary"
              variant="contained"
              size="large"
              type="submit"
            >
              Login
            </Button>
          </form>
          {/* {error && (
            <Typography
              variant="h6"
              gutterBottom
              sx={{ margin: "1em 0" }}
              align="center"
            >
              {error}
            </Typography>
          )}
          {outcome && (
            <Typography
              variant="h6"
              gutterBottom
              sx={{ margin: "1em 0" }}
              align="center"
            >
              {outcome}
            </Typography>
          )} */}
        </Box>
      </Container>
    </motion.div>
  );
};

export default Login;