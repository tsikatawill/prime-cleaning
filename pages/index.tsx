import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>
          Prime Cleaning Service
        </title>
        <meta
          name="description"
          content="Cleaning Made Easy. Living Made Better"
          key="desc"
        />
        <link rel="icon" href="/images/favicon-light.svg" type="image/x-icon" />
      </Head>
      <Header />

      <div className="mt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est nesciunt officiis porro reiciendis veritatis modi asperiores? Porro quasi minus, consectetur accusantium corporis vel cum itaque sunt quam illum dolores!
      </div>
    </>
  );
}
