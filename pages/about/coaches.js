import Coach from '../../components/Coach'

export default function Coaches() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl text-periwinkle">Meet the team</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <Coach />
        <Coach />
        <Coach />
        <Coach />
        <Coach />
        <Coach />
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/home' : '/home'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - About us',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - À propos de nous',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
