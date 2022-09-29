import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import MetaData from './MetaData'

import en from '../locales/en'
import fr from '../locales/fr'

export default function Layout(props) {
  const t = props.locale === 'en' ? en : fr

  return (
    <>
      <MetaData language={props.locale} data={props.meta}></MetaData>

      <Header
        language={props.locale}
        t={t}
        langToggleLink={props.langToggleLink}
      ></Header>

      <main className="mb-10" id="mainContent">
        <div>{props.children}</div>
      </main>

      <Footer footerLogoAltText="footerCanadaCaAltText" t={t} />
    </>
  )
}

/**
 * Setup default props
 */

Layout.defaultProps = {
  title: 'Next Template - Canada.ca',
}

Layout.propTypes = {
  /*
   * Locale current language
   */
  locale: PropTypes.string,
  /*
   * Meta Tags
   */
  meta: PropTypes.object,
  /*
   * Title of the page
   */
  title: PropTypes.string,
  /*
   * Link of the page in opposite language
   */
  langToggleLink: PropTypes.string,
}
