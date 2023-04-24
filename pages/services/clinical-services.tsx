import Head from "next/head";

import ClinicalServices from "@/components/pages/ClinicalServices";

export default function ClinicalServicesPage() {
  return (
    <main>
      <Head>
        <title>arike - Clinical Services</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <ClinicalServices />
    </main>
  );
}
