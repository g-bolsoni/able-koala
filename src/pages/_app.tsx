import '../../styles/globals.sass'
import { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppProvider } from '../data/context/AppContext'
import Loading from '../components/Modals/Loading'
export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Loading />
      <Toaster position='top-right' />
      <Header />
      <Component />
      <Footer />
    </AppProvider>
  )
}