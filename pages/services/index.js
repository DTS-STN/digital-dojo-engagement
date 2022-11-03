import DottedLine from '../../components/DottedLine'

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h1 className="text-center">Our Services</h1>
      <p className="text-center">
        There are many ways we can help your team deliver products and services
        using modern practices in a GoC context. Our coaches are here to help
        you improve your ability to manage complex work, streamline processes,
        increase communication and resiliency, and deliver with confidence.
      </p>
      <DottedLine />
      <h2 className="font-bold mb-2">
        Select a service below to view what it entails:
      </h2>
      <div className="md:grid grid-cols-3 gap-6">
        <div className="border-2 space-y-2 py-2">
          <img src="/consultations.png" alt="" className="w-1/2 mx-auto" />
          <h3 className="text-white bg-[#5099c3] text-lg text-center">
            Consultations
          </h3>
          <p className="text-sm w-5/6 text-center mx-auto h-36">
            Short engagements to provide you with guidance and feedback.
          </p>
          <button className="bg-periwinkle rounded-full text-white py-1 px-2 text-sm mx-auto flex">
            Learn more
          </button>
        </div>
        <div className="border-2 space-y-2 py-2">
          <img src="/consultations.png" alt="" className="w-1/2 mx-auto" />
          <h3 className="text-white bg-[#49a292] text-lg text-center">
            Workshops
          </h3>
          <p className="text-sm w-5/6 text-center mx-auto h-36">
            Short interactive sessions focused on a particular topic.
            Individuals or teams will learn, breakout into rooms to practice,
            network, and collaborate.
          </p>
          <button className="bg-periwinkle rounded-full text-white py-1 px-2 text-sm flex mx-auto">
            Learn more
          </button>
        </div>
        <div className="border-2 space-y-2 py-2">
          <img src="/consultations.png" alt="" className="w-1/2 mx-auto" />
          <h3 className="text-white bg-[#d270ac] text-lg text-center">
            Dojo Challenges
          </h3>
          <p className="text-sm w-5/6 text-center mx-auto h-36">
            A timeboxed engagement, lasting from two to six weeks, where a team
            challenges itself to tackle their biggest pain points through
            facilitated sessions with our coaches.
          </p>
          <button className="bg-periwinkle rounded-full text-white py-1 px-2 text-sm flex mx-auto">
            Learn more
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
