import DottedLine from '../../components/DottedLine'

export default function Challenges({ locale }) {
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h1 className="text-center">Dojo Challenges</h1>
      <DottedLine />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/challenges' : '/challenges'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Dojo Challenges',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Le Défi du Dojo',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
