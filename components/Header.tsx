import { cn } from "@/utils/cn";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className={cn("bg-cover bg-bottom bg-no-repeat bg-[url(/images/header-bg.jpg)] text-white", props.className)}>
      <Navbar />

      <Hero />
    </header>
  );
};

export default Header;
