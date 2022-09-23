import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  /* istanbul ignore next */
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  /* istanbul ignore next */
  return (
    <ThemeProvider attribute="class">
      <Layout
        locale={pageProps.locale}
        meta={pageProps.meta}
        langToggleLink={pageProps.langToggleLink}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
