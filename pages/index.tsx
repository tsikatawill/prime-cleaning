import Footer from "@/components/Footer";
import GetAQuote from "@/components/GetAQuote";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WorkingDays from "@/components/WorkingDays";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prime Cleaning Service</title>
        <meta
          name="description"
          content="Cleaning Made Easy. Living Made Better"
          key="desc"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <link rel="icon" href="/images/favicon-light.svg" type="image/x-icon" />
      </Head>

      <ToastContainer />

      <Header />

      <Services />
      <WorkingDays />
      <Testimonial />
      <GetAQuote />
      <Footer />
    </>
  );
}
