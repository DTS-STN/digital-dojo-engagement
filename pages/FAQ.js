import PropTypes from 'prop-types'
import ExpandableHeadline from '../components/ExpandableHeadline'
import DottedLine from '../components/DottedLine'

import enFAQ from '../locales/FAQ/en'
import frFAQ from '../locales/FAQ/fr'

export default function FAQ(props) {
  const t = props.locale === 'en' ? enFAQ : frFAQ
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center">{t.faq}</h1>
      <DottedLine />
      {/* Loop through all FAQ objects here */}
      {t.qaArray.map((qaObject, index) => {
        return <ExpandableHeadline key={index} qaObject={qaObject} />
      })}
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/FAQ' : '/FAQ'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - FAQ',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - FAQ',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}

FAQ.propTypes = {
  /**
   * current locale in the address
   */
  locale: PropTypes.string,

  /*
   * Meta Tags
   */
  meta: PropTypes.object,
}
