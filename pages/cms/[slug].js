import { getPage } from '../../lib/cms'

export default function WP({ locale, page_en, page_fr }) {
  let page = locale === 'en' ? page_en : page_fr
  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   }
// }

export async function getServerSideProps({ locale, params }) {
  let { slug } = params
  let page_en = await getPage(slug, 'en')
  let page_fr = await getPage(slug, 'fr')

  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? `/fr/cms/${slug}` : `/cms/${slug}`

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: `Digital Dojo - ${page_en.title.rendered}`,
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: `Dojo Numérique - ${page_fr.title.rendered}`,
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta, page_en, page_fr },
  }
}
