import Head from "next/head";

import Volunteer from "@/components/pages/Volunteer";

export default function KoodePage() {
  return (
    <main>
      <Head>
        <title>arike - Koode</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Volunteer />
    </main>
  );
}
