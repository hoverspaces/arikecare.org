import Head from "next/head";

import Donate from "@/components/pages/Donate";

export default function DonatePage() {
  return (
    <main>
      <Head>
        <title>arike - Donate</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Donate />
    </main>
  );
}
