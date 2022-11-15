import { getPage, getPages } from '../../lib/cms'
import Link from 'next/link'

export default function CMS({ locale, pages_en, pages_fr }) {
  let pages = locale === 'en' ? pages_en : pages_fr
  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1>CMS Pages</h1>
      <ul className="list-disc list-inside ">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link href={`/cms/${page.slug}`}>
              <a className="underline underline-offset-2 text-indigo-800 visited:text-purple-800">
                {page.title.rendered}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  let pages = await getPages()
  let pages_en = [],
    pages_fr = []
  for (let page of pages) {
    pages_en.push(await getPage(page.slug, 'en'))
    pages_fr.push(await getPage(page.slug, 'fr'))
  }

  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? `/fr/cms` : `/cms`

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: `Digital Dojo - CMS`,
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: `Dojo Numérique - CMS`,
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta, pages_en, pages_fr },
  }
}
