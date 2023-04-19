import Head from "next/head";
import type { AppProps } from "next/app";

import Header from "../components/baseWrapper/Header";
import Footer from "../components/baseWrapper/Footer";

import "@/styles/googleFont.css";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    {
      console.log(pageProps);
    }
  }, []);
  return (
    <div className="quicksand bg-white">
      <Head>
        <title>
          arike - A not-for-profit NGO that provides professional home-based
          health care
        </title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
