import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '../components/Layouts/Base'
import { useEffect } from 'react';
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}
