import Coach from '../../components/Coach'
import fakeUsers from '../../lib/fakeUsers'

export default function Coaches({ fakeCoaches }) {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl text-periwinkle">Meet the team</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {fakeCoaches.map((e) => (
          <Coach
            src={e.picture.large}
            name={`${e.first_name} ${e.last_name}`}
            title={e.employment.title}
            blurb={e.blurb}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  let fakeCoaches = await fakeUsers(6)

  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en' ? '/fr/about/coaches' : '/about/coaches'

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
    props: { locale, langToggleLink, meta, fakeCoaches },
  }
}
