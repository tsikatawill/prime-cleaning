import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container className="py-5 sm:py-10 text-center text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Prime Cleaning Services, Accra.
          <br />
          All rights reserved.
        </p>

        <small>
          Developed by{" "}
          <Link
            className="font-semibold"
            href="https://twitter.com/tsikatawill"
            target="_blank"
          >
            William M. Tsikata
          </Link>
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
