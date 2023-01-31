import { Toastcontainers } from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Toastcontainers position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover> */}
        <Component {...pageProps} />
      {/* </Toastcontainers> */}
    </>
  )
}
