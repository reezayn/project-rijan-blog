import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="font-sans">
        <Navbar />
        <NextNProgress color='#53BD95' height={5} />
        <div className="h-20"></div>
        <main>
          <div className="mx-28">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
