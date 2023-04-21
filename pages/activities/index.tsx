import Head from "next/head";

import Activities from "@/components/pages/Activities";

export default function ActivitiesPage() {
  return (
    <main>
      <Head>
        <title>arike - Activities</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Activities />
    </main>
  );
}
