import PropTypes from 'prop-types'
import en from '../locales/en'
import fr from '../locales/fr'
import enHome from '../locales/home/en'
import frHome from '../locales/home/fr'
import logger from '../lib/logger'
import { useEffect, useState } from 'react'

import { fetchContent } from '../lib/cms'

export default function Home(props) {
  /* istanbul ignore next */
  const t = props.locale === 'en' ? en : fr
  const th = props.locale === 'en' ? enHome : frHome

  logger.info('Home page')
  logger.error('test')
  logger.warn('test')
  useEffect(() => {
    logger.debug('Home mounted')
  }, [])

  const [quote, setQuote] = useState(0)
  const handleClick = (e) => {
    setQuote(quote ^ 1)
  }

  return (
    <div className="max-w-xl mx-auto">
      <section className="flex items-center gap-5 mb-10">
        <div className="flex flex-col items-center">
          <div className="border border-black shadow-lg p-4 text-periwinkle">
            <div className={quote && 'hidden'}>
              <blockquote className="italic">{th.quote1}</blockquote>
              <cite className="block font-semibold text-end">
                - Stefan M. (ESDC)
              </cite>
            </div>

            <div className={!quote && 'hidden'}>
              <blockquote className="italic">{th.quote2}</blockquote>
              <cite className="block font-semibold text-end">
                - Uma P. (ESDC)
              </cite>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex gap-3">
              <button
                aria-label="previous quote"
                className={`bg-teal-600 rounded-full w-4 h-4 hover:bg-teal-900 duration-200 ${
                  quote && 'bg-teal-900'
                }`}
                onClick={handleClick}
              ></button>
              <button
                aria-label="next quote"
                className={`bg-teal-600 rounded-full w-4 h-4 hover:bg-teal-900 duration-200 ${
                  !quote && 'bg-teal-900'
                }`}
                onClick={handleClick}
              ></button>
            </div>
          </div>
        </div>

        <button
          className="order-first h-16 bg-gray-900 text-white p-4 rounded-l-md hover:bg-gray-800"
          onClick={handleClick}
          alt="Previous Testimonial"
        >
          &#10094;
        </button>

        <button
          className="bg-gray-900 h-16 text-white p-4 rounded-r-md hover:bg-gray-800"
          onClick={handleClick}
          alt="Next Testimonial"
        >
          &#10095;
        </button>
      </section>

      <section>
        <h1 className="text-3xl text-periwinkle mb-4">{th.h1}</h1>

        <div className="flex gap-10">
          <div className="flex flex-col gap-6">
            <p>{th.p1}</p>
            <p>{th.p2}</p>
            <p>{th.p3}</p>
          </div>

          <div className="group">
            <a
              href={`/Team_charter_${props.locale === 'en' ? 'EN' : 'FR'}.png`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/Team_charter_${props.locale === 'en' ? 'EN' : 'FR'}.png`}
                alt="Digital Dojo one-pager"
              ></img>
            </a>
            <p className="text-center text-sm group-hover:text-periwinkle">
              {th.charter}
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-10 mb-10">
        <img
          src="/decorative-dots.png"
          className="dots"
          role="presentation"
          alt=""
        />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-3xl text-periwinkle mb-2">{th.h2}</h2>

        <h3 className="text-xl text-periwinkle">{th.h31}</h3>
        <p className="mb-2">{th.p4}</p>

        <h3 className="text-xl text-periwinkle">{th.h32}</h3>
        <p className="mb-2">{th.p5}</p>

        <h3 className="text-xl text-periwinkle">{th.h33}</h3>
        <p>{th.p6}</p>
      </section>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const content = await fetchContent()

  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/home' : '/home'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Home',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Accueil',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, content, meta },
  }
}

Home.propTypes = {
  /**
   * current locale in the address
   */
  locale: PropTypes.string,

  /*
   * Meta Tags
   */
  meta: PropTypes.object,
}
