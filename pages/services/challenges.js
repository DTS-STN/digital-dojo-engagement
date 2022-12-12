import DottedLine from '../../components/DottedLine'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '../../locales/services/en'
import fr from '../../locales/services/fr'

export default function Challenges({ locale }) {
  const router = useRouter()
  const t = locale === 'en' ? en : fr

  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1 className="text-center">{t.challenges}</h1>
      <DottedLine />
      <section className="w-full mx-auto md:w-5/6 border-b-2 pb-5 pt-5 mb-6">
        <div className="flex flex-col md:flex-row gap-5 mb-4 items-center mx-10">
          <img src="/challenges.png" alt="" className="w-96" />
          <div className="flex flex-col gap-2">
            <button
              onClick={() => router.push('/services/workshops')}
              className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle"
            >
              {t.previousService}
            </button>
          </div>
        </div>
        <p className="text-center text-periwinkle text-lg font-bold">{t.cP1}</p>
      </section>
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.cH2}</h2>
          <ol className="list-decimal list-inside ml-5">
            <li>{t.cLi1}</li>
            <li>{t.cLi2}</li>
          </ol>
          <p>{t.cP2}</p>
          <ul className="list-disc list-inside ml-5">
            <li>{t.cLi3}</li>
            <li>{t.cLi4}</li>
            <li>{t.cLi5}</li>
            <li>{t.cLi6}</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.c30}</h2>
          <p>{t.c30P}</p>
          <p>{t.c30P2}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.c10}</h2>
          <p>{t.c10P}</p>
          <p>{t.c10P2}</p>
        </div>
      </section>
      <div className="mt-10 space-x-5">
        <button
          onClick={() => router.push('/services/workshops')}
          className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle w-32"
        >
          {t.back}
        </button>
        <Link href="/services">
          <a className="text-periwinkle underline">{t.backToService}</a>
        </Link>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en' ? '/fr/services/challenges' : '/services/challenges'

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
