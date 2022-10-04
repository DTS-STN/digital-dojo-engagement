import BeltAssessment from '../../components/BeltAssessment'

export default function BeltSystem() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl text-periwinkle text-center mb-5">Belt System</h1>
      <p className="mb-5">
        The Digital Dojo Belt System Self-Assessment is designed for your team
        to help identify your team's current knowledge of Agile, DevOps, and
        Design Thinking domains. This will help the Dojo team work with you to
        improve your skills throughout an engagement.
      </p>
      <img
        src="/dots.png"
        alt=""
        className="w-64 object-scale-down mx-auto mb-5"
      ></img>
      <h2 className="text-xl font-bold text-periwinkle mb-5">How-to Assess</h2>
      <p className="mb-5">
        Below we categorized the
        <span className="font-bold"> 4 Digital Dojo domains</span> and their
        <span className="font-bold"> key principles</span>.
      </p>
      <p className="mb-5">
        For each category, select the corresponsing belt colour that best
        descirbes your team's current maturity.
      </p>
      <p className="mb-5">
        Your belt assessment results will help us create a customized session
        where we can identify areas of iterest together, adding the most value
        to your project.
      </p>

      {/* todo:: large images of text are an antipattern for accessibility.  
      The image should be made into a component that is a table and rendered as text, 
      otherwise we'll have to add a long description for all of the text in the image */}
      <img
        src="/belt-assessment.jpg"
        alt="belt assessment chart"
        className="mb-5"
      ></img>

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
