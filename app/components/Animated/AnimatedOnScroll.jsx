import { motion } from "framer-motion";

const AnimatedOnScroll = ({
  children,
  initial = { opacity: 0, y: 100 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: "easeOut" },
  once = true,
  className = "",
}) => {

  return (
    <motion.div
      initial={initial}
      whileInView={finalWhileInView}
      transition={transition}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
