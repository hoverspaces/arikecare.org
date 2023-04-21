import type { AppProps } from "next/app";

import Header from "../components/baseWrapper/Header";
import Footer from "../components/baseWrapper/Footer";

import "@/styles/googleFont.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="quicksand bg-white">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
