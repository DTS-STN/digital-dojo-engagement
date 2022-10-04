import Coach from '../../components/Coach'
import DottedLine from '../../components/DottedLine'
import fakeUsers from '../../lib/fakeUsers'

export default function Coaches({ fakeCoaches }) {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl py-5 text-center text-periwinkle">Our Coaches</h1>
      <p>
        Our experienced coaches are here to help guide your team and provide
        support through your entire Dojo engagement.
      </p>
      <DottedLine />
      <h1 className="text-2xl py-5 text-left text-periwinkle">Meet the team</h1>

      <div className="grid grid-cols-3 gap-10 mt-10">
        {fakeCoaches.map((e) => (
          <Coach
            key={e.uid}
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
