import Head from "next/head";

import Koode from "@/components/pages/Koode";

export default function KoodePage() {
  return (
    <main>
      <Head>
        <title>arike - Koode</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Koode />
    </main>
  );
}
