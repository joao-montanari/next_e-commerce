import '../styles/globals.css'
import ComponentLayout from '../components/ComponentLayout'

function MyApp({ Component, pageProps }) {
  return (
    <ComponentLayout>
      <Component {...pageProps} />
    </ComponentLayout>
  )
}

export default MyApp
