import DottedLine from '../../components/DottedLine'

export default function Workshops({ locale }) {
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h1 className="text-center">Workshops</h1>
      <DottedLine />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/workshops' : '/workshops'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Workshops',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Les Ateliers',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
