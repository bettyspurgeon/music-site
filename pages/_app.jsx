import "@/styles/globals.css";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
