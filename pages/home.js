import PropTypes from 'prop-types'
import en from '../locales/en'
import fr from '../locales/fr'
import logger from '../lib/logger'
import { useEffect, useState } from 'react'

import { fetchContent } from '../lib/cms'

export default function Home(props) {
  /* istanbul ignore next */
  const t = props.locale === 'en' ? en : fr

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
              <blockquote className="italic">
                "The Digital Dojo provided an excellent introduction into the
                methods involved with using Azure DevOps, and Agile as a whole.
                Their service is collaborative with team members on a personal
                level, and they consistently accommodate the needs of others."
              </blockquote>
              <cite className="block font-semibold text-end">
                - Stefan M. (ESDC)
              </cite>
            </div>

            <div className={!quote && 'hidden'}>
              <blockquote className="italic">
                "Your team is always innovative and kept us engaged throughout
                the coaching. You have listened to our requirements and
                connected us to subject matter experts ... I would encourage my
                peers to connect to the Dojo for learning and improving their
                day-to-day job functions."
              </blockquote>
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
        <h2 className="text-3xl text-periwinkle mb-4">What's a Dojo?</h2>

        <div className="flex gap-10">
          <div className="flex flex-col gap-6">
            <p>
              A Dojo is a Japanese word for a space for immersive learning or
              meditation. The global DevOps community have embraced the concept
              of a Dojo for learning and implementing organizational
              transformation.
            </p>

            <p>
              Digital Technology Solutions within IITB at ESDC is taking this
              concept and applying it to learning on the TBS Digital Standards,
              which are aligned to Agile and DevOps mindsets.
            </p>

            <p>
              Our Digital Dojo aims to provide an immersive virtual space where
              ESDC product teams can learn new skills and new ways to solve
              common problems with the help and guidance of GC Experts.
            </p>
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
              View our Team Charter
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
        <h2 className="text-3xl text-periwinkle mb-2">Why our Dojo?</h2>

        <h3 className="text-xl text-periwinkle">Team Based Experience</h3>
        <p className="mb-2">
          We upskill a whole team – business and IT - together.​ This builds
          trust, mutual​ understanding, cohesion and​ collaboration
        </p>

        <h3 className="text-xl text-periwinkle">
          Government of Canada Focused
        </h3>
        <p className="mb-2">
          We cater our experienced based on realistic Government of Canada IT
          practices, standards,​ languages and challenges.
        </p>

        <h3 className="text-xl text-periwinkle">Virtual Learning</h3>
        <p>
          We are designing the Dojo with virtual learning in mind. We will also
          help teams learn how to work together more effectively in this new
          world.
        </p>
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
