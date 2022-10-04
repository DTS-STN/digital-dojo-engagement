import BeltAssessment from '../../components/BeltAssessment'

export default function BeltSystem() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl text-periwinkle">Belt System</h1>
      <p>
        The Digital Dojo Belt System Self-Assessment is designed for your team
        to help identify your team's current knowledge of Agile, DevOps, and
        Design Thinking domains. This will help the Dojo team work with you to
        improve your skills throughout an engagement.
      </p>
      <h2>How to Assess</h2>
      <p>
        Below we categorized the <strong>4 Digital Dojo Domains</strong> and
        their <strong>key Principles</strong>.
      </p>
      <p>
        For each category, select the corresponsing belt colour that best
        descirbes your team's current maturity.
      </p>
      <p>
        Your belt assessment results will help us create a customized session
        where we can identify areas of iterest together, adding the most value
        to your project.
      </p>
      <BeltAssessment />
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
