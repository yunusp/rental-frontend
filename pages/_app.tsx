import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '../components/Layouts/Base'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    // clean up this mess later
    localStorage.removeItem("username");
  }, []);
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}
