import Head from "next/head";

import Landing from "@/components/pages/landing/Landing";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>
          arike - A not-for-profit NGO that provides professional home-based
          health care
        </title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Landing />
    </main>
  );
}
