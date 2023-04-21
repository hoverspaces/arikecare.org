import Head from "next/head";

import Contact from "@/components/pages/Contact";

export default function ContactPage() {
  return (
    <main>
      <Head>
        <title>arike - Contact</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Contact />
    </main>
  );
}
