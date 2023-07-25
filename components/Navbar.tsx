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

        <ul className="hidden sm:flex gap-4 font-semibold text-md">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#quote">Quote</Link>
          </li>
        </ul>

        <div className="block sm:hidden">
          <Sidebar>
            <ul className="flex flex-col gap-4 font-semibold text-md">
              <li className="p-2 hover:bg-slate-100 rounded-md">
                <Link className="w-full h-full block" href="/">
                  Home
                </Link>
              </li>
              <li className="p-2 hover:bg-slate-100 rounded-md">
                <Link className="w-full h-full block" href="/">
                  About
                </Link>
              </li>
              <li className="p-2 hover:bg-slate-100 rounded-md">
                <Link className="w-full h-full block" href="/#contact">
                  Contact
                </Link>
              </li>
              <li className="p-2 hover:bg-slate-100 rounded-md">
                <Link className="w-full h-full block" href="/#services">
                  Services
                </Link>
              </li>
              <li className="p-2 hover:bg-slate-100 rounded-md">
                <Link className="w-full h-full block" href="/#quote">
                  Quote
                </Link>
              </li>
            </ul>
          </Sidebar>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
