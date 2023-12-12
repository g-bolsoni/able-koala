import '../../styles/globals.sass'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppProvider } from '../data/context/AppContext'
import Loading from '../components/Modals/Loading'

import TagManager from 'react-gtm-module';
import { useEffect } from 'react';



export default function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    const tagManagerArgs = {
      gtmId: 'GTM-5TQPWMXB'
    }

    TagManager.initialize(tagManagerArgs);
  }, [])

  return (
    <AppProvider>
      <Analytics />
      <Loading />
      <Toaster position='top-right' />
      <Header />
      <Component />
      <Footer />
    </AppProvider>
  )
}