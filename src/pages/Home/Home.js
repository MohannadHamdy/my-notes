import "./home.scss";
import { motion } from "framer-motion";
//import TransactionForm from "./TransactionForm";
import { Typography } from "@mui/material";
const homeContainer = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};
const Home = () => {
  return (
    <motion.div
      variants={homeContainer}
      initial="hidden"
      animate="visible"
      className="container"
    >
      <div className="content">
        <Typography variant="h6" gutterBottom>
          Transaction List
        </Typography>
        {/* {error && <p>{error}</p>}
    {documents && <TransactionsList transactions={documents} />} */}
      </div>
      <div className="sidebar">{/* <TransactionForm uid={user.uid} /> */}</div>
    </motion.div>
  );
};

export default Home;
