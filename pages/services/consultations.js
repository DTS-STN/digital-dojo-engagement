import DottedLine from '../../components/DottedLine'

export default function Consultations({ locale }) {
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h1 className="text-center">Consultations</h1>
      <DottedLine />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en' ? '/fr/services/consultations' : '/consultations'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Consulations',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Consulations',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
