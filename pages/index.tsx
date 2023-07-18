import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WorkingDays from "@/components/WorkingDays";
import Head from "next/head";

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

      <Header />

      <Services />
      <WorkingDays />
      <Testimonial />

      <div className="space h-96"></div>
    </>
  );
}
