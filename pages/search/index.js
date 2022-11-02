import SearchBar from '../../components/SearchBar'

export default function SearchIndex() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Search Site</h1>
      <SearchBar className="w-full border rounded border-periwinkle px-2 py-1" />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/search' : '/search'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Search',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Chercher',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
