import Head from "next/head";

import About from "@/components/pages/About";

export default function AboutPage() {
  return (
    <main>
      <Head>
        <title>arike - About</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <About />
    </main>
  );
}
