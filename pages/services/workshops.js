import DottedLine from '../../components/DottedLine'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '../../locales/services/en'
import fr from '../../locales/services/fr'

export default function Workshops({ locale }) {
  const router = useRouter()
  const t = locale === 'en' ? en : fr

  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1 className="text-center">{t.workshops}</h1>
      <DottedLine />
      <section className="w-full mx-auto md:w-5/6 border-b-2 pb-5 pt-5 mb-6">
        <div className="flex flex-col md:flex-row gap-5 mb-4 items-center mx-10">
          <img src="/workshops.png" alt="" className="w-96" />
          <div className="flex flex-col gap-2">
            <button
              onClick={() => router.push('/services/challenges')}
              className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle"
            >
              {t.nextService}
            </button>
            <button
              onClick={() => router.push('/services/consultations')}
              className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle"
            >
              {t.previousService}
            </button>
          </div>
        </div>
        <p className="text-center text-periwinkle text-lg font-bold">
          {t.workshopsBlurb}
        </p>
      </section>
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">
            {t.workshopsInclude}
          </h2>
          <ul className="list-disc list-inside ml-5">
            <li>{t.wsAgile}</li>
            <li>{t.wsCollab}</li>
            <li>{t.wsVis}</li>
            <li>{t.wsFac}</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.customTeam}</h2>
          {t.wsP}
          <Link href="/contact">
            <a className="text-periwinkle underline">{t.wsA}</a>
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.wsOh}</h2>
          <p>{t.wsOhP1}</p>
          <p>{t.wsOhP2}</p>
          <Link href="/events">
            <a className="text-periwinkle underline">{t.wsEventsA}</a>
          </Link>
        </div>
      </section>
      <div className="mt-10 space-x-5">
        <button
          onClick={() => router.push('/services/consultations')}
          className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle w-32"
        >
          {t.back}
        </button>
        <button
          onClick={() => router.push('/services/challenges')}
          className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle w-32"
        >
          {t.nextService}
        </button>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en' ? '/fr/services/workshops' : '/services/workshops'

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
