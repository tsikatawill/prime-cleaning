import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav>
      <Container className="py-2 flex justify-between items-center">
        <Link href="/" className=" w-20 sm:w-auto">
          <Image
            src="/images/logo-dark.svg"
            height={100}
            width={150}
            alt="logo"
          />
        </Link>

        <ul className="flex gap-4 font-semibold text-md">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
        </ul>

        <Sidebar>
          <ul className="gap-4 font-semibold text-md">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
          </ul>
        </Sidebar>
      </Container>
    </nav>
  );
};

export default Navbar;
