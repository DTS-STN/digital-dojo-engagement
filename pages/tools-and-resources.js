import DottedLine from '../components/DottedLine'
import { useState, useEffect } from 'react'
import en from '../locales/tools-and-resources/en'
import fr from '../locales/tools-and-resources/fr'
import terms_en from '../locales/tools-and-resources/terms_en'
import terms_fr from '../locales/tools-and-resources/terms_fr'

export default function ToolsAndResources({ locale }) {
  const [state, setState] = useState('A')
  const t = locale === 'en' ? en : fr
  const terms = locale === 'en' ? terms_en : terms_fr
  const letterSet = new Set(Object.keys(terms).map((term) => term[0]))

  // if language is toggled, the displayed letter should be reset, otherwise
  // the user might end up on a letter that doesn't have a similar translation
  useEffect(() => {
    setState('A')
  }, [locale])

  return (
    <div className="max-w-5xl mx-auto p-2">
      <h1 className="text-center">{t.title}</h1>
      <DottedLine />
      <section className="mb-10">
        <h2 className="text-2xl text-periwinkle mb-4">{t.dojoVideo}</h2>
        <div className="md:flex gap-10">
          <iframe
            src="https://www.youtube.com/embed/G2FDF5LHWOU"
            title="the digital dojo experience"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mb-5 md:mb-0"
          ></iframe>
          <div className="flex flex-col gap-5">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl text-periwinkle mb-4">{t.playlist}</h2>
        <p className="mb-5">{t.p3}</p>
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
          <div className="space-y-2">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLA--nqTdtET3gvCY8DBBX-v4-APKMMfZ3"
              title="Agile playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl text-periwinkle">{t.agileBasics}</h3>
            <p>{t.agileDesc}</p>
          </div>
          <div className="space-y-2">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLA--nqTdtET3vDgPXTrCp7YERpq874zWl"
              title="Kanban playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl text-periwinkle">{t.kanban}</h3>
            <p>{t.kanbanDesc}</p>
          </div>
          <div className="space-y-2">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLA--nqTdtET37Dnay7PJy_X6aQsipwfMa"
              title="the digital dojo experience"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl text-periwinkle">{t.scrum}</h3>
            <p>{t.scrumDesc}</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl text-periwinkle mb-4">{t.terms}</h2>
        <div className="flex flex-wrap md:justify-between mb-5">
          {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) => (
            <button
              key={letter}
              onClick={(e) => setState(e.target.value)}
              value={letter}
              className={`p-2 text-periwinkle font-semibold ${
                letter === state ? 'underline underline-offset-4' : ''
              } ${letterSet.has(letter) ? '' : 'opacity-50'}`}
              disabled={!letterSet.has(letter)}
              tabIndex={letterSet.has(letter) ? 0 : -1}
              aria-label={`filter terms by the letter: ${letter}`}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="space-y-5">
          {Object.keys(terms)
            .filter((term) => term[0] === state)
            .map((term) => (
              <div key={term}>{terms[term]}</div>
            ))}
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink =
    locale === 'en' ? '/fr/tools-and-resources' : '/tools-and-resources'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Tools and Resources',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Outils et Ressources',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
