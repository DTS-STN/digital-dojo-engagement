import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import en from '../../locales/belt-assessment/belt-results/en'
import fr from '../../locales/belt-assessment/belt-results/fr'
import GroupedBeltResults from '../../components/GroupedBeltResults'

export default function BeltResults({ locale }) {
  const t = locale === 'en' ? en : fr
  const router = useRouter()
  const [state, setState] = useState({})

  useEffect(() => {
    setState(JSON.parse(router.query.state))
  }, [])

  const groups = {
    'Agile': [
      'continuous-planning',
      'continuous-collaboration',
      'continuous-improvement',
    ],
    'Devops and Agile': ['continuous-quality'],
    'DevOps': [
      'continuous-integration',
      'continuous-delivery',
      'continuous-operations',
      'continuous-security',
    ],
    'Design Thinking': ['continuous-user-feedback'],
  }

  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-periwinkle text-center">
        Belt System Results
      </h1>
      <img src="/dots.png" className="w-64 mx-auto"></img>
      {Object.keys(groups).map((k) => (
        <GroupedBeltResults
          key={k}
          t={t}
          topic={k}
          keys={groups[k]}
          state={state}
        />
      ))}
      <div className="self-end flex gap-4">
        <button
          onClick={() => router.push('/belt-assessment/belt-system')}
          className="w-24 rounded bg-gray-600 text-white px-2 hover:bg-gray-800"
        >
          Back
        </button>
        <button
          onClick={() => router.push('/belt-assessment/belt-system')}
          className="w-24 rounded bg-gray-600 text-white px-2 hover:bg-gray-800"
        >
          Reassess
        </button>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en'
      ? '/fr/belt-assessment/belt-results'
      : '/belt-assessment/belt-results'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Belt Results',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Résultats de ceinture',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
