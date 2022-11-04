import DottedLine from '../../components/DottedLine'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Workshops({ locale }) {
  const router = useRouter()
  return (
    <div className="max-w-3xl mx-auto p-2">
      <h1 className="text-center">Workshops</h1>
      <DottedLine />
      <section className="w-full mx-auto md:w-5/6 border-b-2 pb-5 pt-5 mb-6">
        <div className="flex flex-col md:flex-row gap-5 mb-4 items-center mx-10">
          <img src="/workshops.png" alt="" className="w-96" />
          <div className="flex flex-col gap-2">
            <button
              onClick={() => router.push('/services/challenges')}
              className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle"
            >
              Next Service
            </button>
            <button
              onClick={() => router.push('/services/consultations')}
              className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle"
            >
              Previous
            </button>
          </div>
        </div>
        <p className="text-center text-periwinkle text-lg font-bold">
          Short interactive sessions focused on a particular topic. Individuals
          or teams will learn, breakout into rooms to practice, network, and
          collaborate.{' '}
        </p>
      </section>
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">
            Workshops include:
          </h2>
          <ul className="list-disc list-inside ml-5">
            <li>Agile and DevOps</li>
            <li>Work planning and collaboration tools</li>
            <li>How to visualize work using Kanban boards</li>
            <li>Facilitation techniques for your team meetings</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">
            Custom Team Workshop
          </h2>
          <p>
            We plan and facilitate an interactive workshop focused on a topic of
            your choice, <span className="font-bold">catered to your team</span>
            's specific needs.
          </p>
          <Link href="/contact">
            <a className="text-periwinkle underline">
              Plan a custom team workshop with the Dojo!
            </a>
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-periwinkle font-bold">
            Open House Workshop
          </h2>
          <p>
            We plan and facilitate an interactive workshop focused on a topic to
            be provided to a wide audience that may not necessarily be able to
            rally around a specific common goal.
          </p>
          <p>
            This may be useful as a way to quickly understand what the Dojo has
            to offer, without any firm commitment to working with the Dojo and
            it's custom catered offerings.
          </p>
          <Link href="/events">
            <a className="text-periwinkle underline">
              View our events page for upcoming Dojo workshops!
            </a>
          </Link>
        </div>
      </section>
      <div className="mt-10 space-x-5">
        <button
          onClick={() => router.push('/services/consultations')}
          className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle w-32"
        >
          Back
        </button>
        <button
          onClick={() => router.push('/services/challenges')}
          className="bg-periwinkle text-white rounded-full py-1 px-4 hover:bg-darkPeriwinkle w-32"
        >
          Next Service
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
