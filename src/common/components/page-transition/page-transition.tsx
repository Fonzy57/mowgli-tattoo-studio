// NEXT
import { ReactNode } from "react";

// FRAMER MOTION
import { motion } from "framer-motion";

// TYPING
interface PageTransitionProps {
  children: ReactNode;
  duration?: number;
}

const PageTransition = ({ children, duration = 0.25 }: PageTransitionProps) => {
  /* PAGE TRANSITIONS CONFIG */
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.main
      className="min-h-screen"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        ease: "easeInOut",
        duration: duration,
      }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
