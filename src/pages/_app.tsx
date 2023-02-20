import '../../styles/globals.sass'
import { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Toaster position='top-right'/>
      <Header />
      <Component />
      <Footer />
    </>
  )
}