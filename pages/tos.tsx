import Head from "next/head";
import TOS from "@/components/pages/TOS";

export default function TOSPage(): JSX.Element {
  return (
    <main>
      <Head>
        <title>arike - Terms and Conditions</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <TOS />
    </main>
  );
}
