import DottedLine from '../../components/DottedLine'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '../../locales/services/en'
import fr from '../../locales/services/fr'

export default function Consultations({ locale }) {
  const router = useRouter()
  const t = locale === 'en' ? en : fr
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h1 className="text-center">{t.consultations}</h1>
      <DottedLine />
      <section className="w-full mx-auto md:w-5/6 border-b-2 pb-5 pt-5 mb-6">
        <div className="flex flex-col md:flex-row gap-5 md:mb-4 items-center md:mx-10">
          <img src="/consultations.png" alt="" className="md:w-96" />
          <div>
            <button
              onClick={() => router.push('/services/workshops')}
              className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle"
            >
              {t.nextService}
            </button>
          </div>
        </div>
        <p className="text-center text-periwinkle text-lg font-bold">
          {t.consultationsBlurb}
        </p>
      </section>
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.walkIns}</h2>
          <p className="mb-2">{t.walkInsP}</p>
          <Link href="/contact">
            <a className="text-periwinkle underline">{t.walkInsA}</a>
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.discovery}</h2>
          <p>{t.discoveryP1}</p>
          <p>
            {t.discoveryP2}{' '}
            <Link href="/belt-assessment/belt-system">
              <a className="text-periwinkle underline">{t.discoveryBeltA}</a>
            </Link>{' '}
            {t.discoveryP3}
          </p>
          <p>{t.discoveryP4}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.ob}</h2>
          <p>{t.obP1}</p>
          <p>{t.obP2}</p>
          <ul className="list-disc list-inside ml-5">
            <li>{t.obLi1}</li>
            <li>{t.obLi2}</li>
            <li>{t.obLi3}</li>
            <li>{t.obLi4}</li>
            <li>{t.obLi5}</li>
          </ul>
          <p>{t.obP3}</p>
          <ul>
            <li>{t.obLi6}</li>
            <li>{t.obLi7}</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.skill}</h2>
          <p>{t.skillP1}</p>
          <p>{t.skillP2}:</p>
          <ul className="list-disc list-inside ml-5">
            <li>{t.skillLi1}</li>
            <li>{t.skillLi2}</li>
            <li>{t.skillLi3}</li>
            <li>{t.skillLi4}</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">{t.fac}</h2>
          <p>{t.facP1}</p>
          <p>{t.facP2}</p>
          <ul className="list-disc list-inside ml-5">
            <li>{t.facLi1}</li>
            <li>{t.facLi2}</li>
            <li>{t.facLi3}</li>
            <li>{t.facLi4}</li>
            <li>{t.facLi5}</li>
            <li>{t.facLi6}</li>
            <li>{t.facLi7}</li>
          </ul>
          <p>{t.facP3}</p>
          <ul className="list-disc list-inside ml-5">
            <li>{t.facLi8}</li>
            <li>{t.facLi9}</li>
            <li>{t.facLi10}</li>
            <li>{t.facLi11}</li>
            <li>{t.facLi12}</li>
            <li>{t.facLi13}</li>
            <li>{t.facLi14}</li>
            <li>{t.facLi15}</li>
          </ul>
          <p>{t.facP4}</p>
          <ul className="list-disc list-inside ml-5">
            <li>{t.facLi16}</li>
            <li>{t.facLi17}</li>
            <li>{t.facLi18}</li>
            <li>{t.facLi19}</li>
            <li>{t.facLi20}</li>
            <li>{t.facLi21}</li>
            <li>{t.facLi22}</li>
          </ul>
        </div>
      </section>
      <div className="mt-10 space-x-5">
        <button
          onClick={() => router.push('/services')}
          className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle w-32"
        >
          {t.back}
        </button>
        <button
          onClick={() => router.push('/services/workshops')}
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
    locale === 'en' ? '/fr/services/consultations' : '/services/consultations'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Consulations',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Consulations',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
