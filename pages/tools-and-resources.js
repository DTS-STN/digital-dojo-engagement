import DottedLine from '../components/DottedLine'
export default function ToolsAndResources() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-center">tools and resources</h1>
      <DottedLine />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en' ? '/fr/tools-and-resources' : '/tools-and-resources'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Tools and Resources',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Outils et Ressources',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
