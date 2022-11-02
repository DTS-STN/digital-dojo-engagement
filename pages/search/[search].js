import Link from 'next/link'

export default function Search({ search, results }) {
  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1>Results</h1>
      <dl className="md:flex space-x-2">
        <dt className="font-semibold">Displaying search results for:</dt>
        <dd>{search}</dd>
      </dl>
      <ul>
        {results.map((e) => (
          <li key={e.title} className="underline text-periwinkle">
            <Link href={e.href}>
              <a>{e.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps({ locale, params }) {
  const { search } = params
  const server =
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.PROJECT}-${process.env.BRANCH}.${process.env.DOMAIN}`
      : 'http://localhost:3000'

  const results = await (
    await fetch(`${server}/api/searchPages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(search),
    })
  ).json()

  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/engagement' : '/engagement'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Team Engagement',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: "Dojo Numérique - Mobilisation d'équipe",
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta, search, results },
  }
}
