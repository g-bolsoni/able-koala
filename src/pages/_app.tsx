import '../../styles/globals.sass'
import { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppProvider } from '../data/context/AppContext'
export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Toaster position='top-right' />
      <Header />
      <Component />
      <Footer />
    </AppProvider>
  )
}