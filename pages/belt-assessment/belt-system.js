import BeltAssessment from '../../components/BeltAssessment'
import DottedLine from '../../components/DottedLine'
import en from '../../locales/belt-assessment/belt-assessment/en'
import fr from '../../locales/belt-assessment/belt-assessment/fr'

export default function BeltSystem({ locale }) {
  const t = locale === 'en' ? en : fr
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl text-periwinkle text-center mb-5">{t.title}</h1>
      <p className="mb-5">{t.p1}</p>
      <DottedLine />
      <h2 className="text-xl font-bold text-periwinkle mb-5">{t.h2}</h2>
      <p className="mb-5">
        {t.p2}
        <span className="font-bold"> {t.s1}</span> {t.p3}
        <span className="font-bold"> {t.s2}</span>
      </p>
      <p className="mb-5">{t.p4}</p>
      <p className="mb-5">{t.p5}</p>

      <BeltAssessment t={t} />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en'
      ? '/fr/belt-assessment/belt-system'
      : '/belt-assessment/belt-system'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Belt System',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Système de ceinture',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
