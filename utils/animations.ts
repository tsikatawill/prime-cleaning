import { Variants } from "framer-motion";

export const SidebarBgAnim: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeOut", when: "afterChildren" },
  },
};

export const SidebarInnerAnim: Variants = {
  initial: {
    right: "-100%",
    opacity: 1,
  },
  animate: {
    right: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    right: "-100%",
    opacity: 0,
    transition: { duration: 0.15, ease: "easeOut", when: "afterChildren" },
  },
}