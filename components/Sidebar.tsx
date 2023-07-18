import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarBgAnim, SidebarInnerAnim } from "@/utils/animations";
import { cn } from "@/utils/cn";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(true)}
        className="bg-white hover:bg-slate-100 duration-200 transition-all text-black h-8 w-8 grid place-content-center rounded-sm"
      >
        <FiMenu size={20} />
      </button>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            variants={SidebarBgAnim}
            initial="initial"
            animate="animate"
            exit="exit"
            className="py-5 fixed bg-slate-900 bg-opacity-50 z-40 inset-0"
            onClick={() => setSidebarOpen(false)}
          >
            <motion.div
              variants={SidebarInnerAnim}
              className="inner absolute h-screen right-0 max-w-[18rem] w-full top-0 bg-white text-black"
            >
              <button className="hover:bg-slate-100 h-8 w-8 grid place-content-center duration-300 transition-all absolute right-1 top-1 rounded-full">
                <FiX size={20} />
              </button>

              <div className="m-5">{children}</div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
