import { AnimatePresence, motion } from "framer-motion";

const ErrorMsg = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.small
        exit={{ x: 100 }}
        animate={{ x: [100, 0] }}
        className="text-red-500"
      >
        {children}
      </motion.small>
      ;
    </AnimatePresence>
  );
};

export default ErrorMsg;
