import '../../styles/globals.sass'
import { Toaster } from 'react-hot-toast'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position='top-right'/>
      <Component />
    </>
  )
}