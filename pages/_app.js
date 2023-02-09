import '@/styles/globals.css'
import '@/styles/responsive.css'
import Script from 'next/script'
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Dasturlashga oid foydali resurslar (TEST rejimida)"
        description="Dasturlashga oid foydali resurslar"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5F9SJMJPW3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5F9SJMJPW3');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
