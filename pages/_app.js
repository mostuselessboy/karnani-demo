import "@/styles/main.css";
import {Navbar, Footer} from '@/pages/component/Components';
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Karnani</title>
        <meta name="description" content="Developed by Hamza Rizvi" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}