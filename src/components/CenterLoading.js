import { motion } from "framer-motion";
import clsx from "clsx";
import { CircularProgress } from "@mui/material";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const CenterLoading = ({ children, ...props }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className={clsx(
        !props.className &&
          "flex grow flex-col mb-16 justify-center items-center",
        props.className
      )}
    >
      <CircularProgress />
    </motion.div>
  );
};

export default CenterLoading;
