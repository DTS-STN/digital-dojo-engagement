import DottedLine from '../../components/DottedLine'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Challenges({ locale }) {
  const router = useRouter()
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h1 className="text-center">Dojo Challenges</h1>
      <DottedLine />
      <section className="w-full mx-auto md:w-5/6 border-b-2 pb-5 pt-5 mb-6">
        <div className="flex flex-col md:flex-row gap-5 mb-4 items-center mx-10">
          <img src="/workshops.png" alt="" className="w-96" />
          <div className="flex flex-col gap-2">
            <button
              onClick={() => router.push('/services/workshops')}
              className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle"
            >
              Previous
            </button>
          </div>
        </div>
        <p className="text-center text-periwinkle text-lg font-bold">
          A timeboxed engagement, lasting from two to six weeks, where a team
          challenges itself to tackle their biggest pain points through
          facilitated sessions with our coaches.
        </p>
      </section>
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">
            We work with your team to:
          </h2>
          <ol className="list-decimal list-inside ml-5">
            <li>Identify a goal that can be reached in 10 or 30 days</li>
            <li>
              Break that goal down into specific learning/practice/coaching
              objectives
            </li>
          </ol>
          <p>
            Using your real-world work, our coaches will then guide you through
            a series of facilitated sessions aimed at meeting your goals,
            including:
          </p>
          <ul className="list-disc list-inside ml-5">
            <li>Interactive learning sessions</li>
            <li>Co-working sessions to practice new skills together</li>
            <li>
              Interactive exercises to brainstorm, discuss, and collaborate
            </li>
            <li>
              Role-specific coaching for distinct functions and responsibilities
              within your team
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">
            30 day challenge
          </h2>
          <p>
            The 30 days challenge is best for teams that want to improve how
            they work, how they work together, and how they deliver their
            products and services.
          </p>
          <p>
            This option represents a commitment of approximately 40 hours from
            your team (i.e. 1-2 hours a day for 30 working days).
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">
            10 day challenge
          </h2>
          <p>
            The 10 day challenge is great for teams that have a small, specific
            goal.
          </p>
          <p>
            This option represents a commitment of approximately 15-20 hours
            from your team (i.e. 1-2 hours a day for 10 working days).
          </p>
        </div>
      </section>
      <div className="mt-10 space-x-5">
        <button
          onClick={() => router.push('/services/workshops')}
          className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle w-32"
        >
          Back
        </button>
        <Link href="/services">
          <a className="text-periwinkle underline">
            Back to service catalogue page
          </a>
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
