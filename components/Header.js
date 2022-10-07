import React from 'react'
import Image from 'next/image'
import propTypes from 'prop-types'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ThemeChanger from './ThemeChanger'
import Navbar from './Navbar'

export default function Header(props) {
  const t = props.t
  const { theme } = useTheme()
  return (
    <>
      <nav
        role="navigation"
        aria-label={props.t.skipToMainContent}
        className="absolute w-px h-px -left-96 focus-within:w-screen focus-within:h-auto focus-within:top-4 focus-within:z-50 focus-within:flex focus-within:justify-center"
      >
        <a
          id="skipToMainContent"
          className="bg-blue-800 text-white px-2 focus:outline-black-solid hover:bg-gray-dark"
          href="#mainContent"
          draggable="false"
        >
          {props.t.skipToMainContent}
        </a>
      </nav>

      <header className="mb-2 relative">
        <div className="mx-auto px-2 md:px-4 flex-col flex md:flex md:flex-row justify-between pt-6">
          <div className="flex flex-row justify-between items-center w-full mb-2">
            <a className="px-11 py-2" href={props.t.gocLink}>
              <img
                className="h-5 object-scale-down"
                src={
                  props.language === 'en'
                    ? theme === 'dark'
                      ? '/sig-en.svg'
                      : '/sig-blk-en.svg'
                    : theme === 'dark'
                    ? '/sig-fr.svg'
                    : '/sig-blk-fr.svg'
                }
                alt={
                  props.language === 'en'
                    ? 'Government of Canada'
                    : 'Gouvernement du Canada'
                }
              />
            </a>

            <div className="flex gap-2 md:gap-5 items-center2">
              {/* Language selector for small screens */}
              <Link
                key={props.language}
                href={props.langToggleLink || '/'}
                locale={props.language === 'en' ? 'fr' : 'en'}
              >
                <a
                  className="block md:hidden underline text-periwinkle"
                  lang={props.language === 'en' ? 'fr' : 'en'}
                >
                  {props.language === 'en' ? 'FR' : 'EN'}
                </a>
              </Link>

              <div className="">
                {/* Language selector for mid to larger screens */}
                <Link
                  key={props.language}
                  href={props.langToggleLink || '/'}
                  locale={props.language === 'en' ? 'fr' : 'en'}
                >
                  <a
                    className="md:block hidden underline text-periwinkle"
                    data-cy="toggle-language-link"
                    lang={props.language === 'en' ? 'fr' : 'en'}
                  >
                    {props.language === 'en' ? 'Français' : 'English'}
                  </a>
                </Link>
              </div>
              <ThemeChanger />
            </div>
          </div>
        </div>
        <Navbar t={t} />

        <div className="relative h-0 pb-[25%]">
          <Image
            className="object-cover"
            alt="Team members sitting at a table"
            src="/Homepage_header.png"
            layout="fill"
          />
          <div className="absolute whitespace-nowrap text-center font-medium tracking-[.2em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-[8rem] text-white pb-[3.5rem]">Digital Dojo</h1>
            <h2 className="text-[2.6rem] text-white">
              A tailored experience for your team
            </h2>
          </div>
        </div>
      </header>
    </>
  )
}

/* istanbul ignore next */
export async function getStaticProps({ locale }) {
  return {
    props: { locale },
  }
}

Header.propTypes = {
  // Title of the page
  title: propTypes.string,

  /**
   * 'current' language used to display language links
   */
  language: propTypes.string,

  /**
   * Translated text
   */
  t: propTypes.object,

  /**
   * Link to change locals
   */
  langToggleLink: propTypes.string,
}
