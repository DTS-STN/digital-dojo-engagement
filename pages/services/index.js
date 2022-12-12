import { useRouter } from 'next/router'
import DottedLine from '../../components/DottedLine'
import en from '../../locales/services/en'
import fr from '../../locales/services/fr'

export default function Services({ locale }) {
  const router = useRouter()
  const t = locale === 'en' ? en : fr

  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1 className="text-center">{t.ourServices}</h1>
      <p className="text-center">{t.ourServicesP}</p>
      <DottedLine />
      <h2 className="font-bold mb-2">{t.selectService}</h2>
      <div className="md:grid grid-cols-3 gap-6">
        <div className="border-2 space-y-2 py-2">
          <img src="/consultations.png" alt="" className="w-1/2 mx-auto" />
          <h3 className="text-white bg-[#5099c3] text-lg text-center">
            {t.consultations}
          </h3>
          <p className="text-sm w-5/6 text-center mx-auto h-40">
            {t.consultationsP}
          </p>
          <button
            className="bg-periwinkle rounded-full text-white py-1 px-2 text-sm mx-auto flex"
            onClick={() => router.push('/services/consultations')}
          >
            {t.learnMore}
          </button>
        </div>
        <div className="border-2 space-y-2 py-2">
          <img src="/workshops.png" alt="" className="w-1/2 mx-auto" />
          <h3 className="text-white bg-[#49a292] text-lg text-center">
            {t.workshops}
          </h3>
          <p className="text-sm w-5/6 text-center mx-auto h-40">
            {t.workshopsP}
          </p>
          <button
            onClick={() => router.push('/services/workshops')}
            className="bg-periwinkle rounded-full text-white py-1 px-2 text-sm flex mx-auto"
          >
            {t.learnMore}
          </button>
        </div>
        <div className="border-2 space-y-2 py-2">
          <img src="/challenges.png" alt="" className="w-1/2 mx-auto" />
          <h3 className="text-white bg-[#d270ac] text-lg text-center">
            {t.challenges}
          </h3>
          <p className="text-sm w-5/6 text-center mx-auto h-40">
            {t.challengesP}
          </p>
          <button
            onClick={() => router.push('/services/challenges')}
            className="bg-periwinkle rounded-full text-white py-1 px-2 text-sm flex mx-auto"
          >
            {t.learnMore}
          </button>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/services' : '/services'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Our Services',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Nos Services',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
