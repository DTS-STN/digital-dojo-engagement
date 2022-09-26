import React from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'
import Sidenav from './Sidenav'
import { useTheme } from 'next-themes'

export default function Header(props) {
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

      <header className="mb-10">
        <div className="container mx-auto px-6 flex-col flex md:flex md:flex-row justify-between pt-6">
          <div className="flex flex-row justify-between items-center lg:mt-7">
            <a href={props.t.gocLink}>
              <img
                className="h-5 w-auto xs:h-6 sm:h-7"
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

            {/* Language selector for small screens */}
            <Link
              key={props.language}
              href={props.langToggleLink || '/'}
              locale={props.language === 'en' ? 'fr' : 'en'}
            >
              <a
                className="block md:hidden md:text-sm ml-6 pb-2 sm:ml-16 underline font-body font-bold text-[#284162]  text-base hover:text-[#0535d2]"
                // onClick={() => setLanguage(language)}
                lang={props.language === 'en' ? 'fr' : 'en'}
              >
                {props.language === 'en' ? 'FR' : 'EN'}
              </a>
            </Link>
          </div>

          <div className="flex-col flex">
            {/* Language selector for mid to larger screens */}
            <Link
              key={props.language}
              href={props.langToggleLink || '/'}
              locale={props.language === 'en' ? 'fr' : 'en'}
            >
              <a
                className="md:block hidden pb-0 lg:pb-4 self-end underline font-body text-[#284162] hover:text-[#0535d2] "
                data-cy="toggle-language-link"
                // onClick={() => setLanguage(language)}
                lang={props.language === 'en' ? 'fr' : 'en'}
              >
                {props.language === 'en' ? 'Français' : 'English'}
              </a>
            </Link>

            {/* Placeholder for SearchBar in case is back in ver 4??? */}
            {/* <SearchBar /> */}
          </div>
        </div>

        {/* Border */}
        <div className="relative mb-2 border-t pb-2 mt-4">
          <div className="absolute top-0 left-0">
            <Sidenav t={props.t} />
          </div>
        </div>

        {/* <Menu
          loginText={props.t.login}
          items={[
            {
              link: '/search',
              text: props.t.serviceAndBenefits,
            },
            {
              link: '/',
              text: props.t.tools,
            },
            {
              link: '/',
              text: props.t.contactUs,
            },
          ]}
        /> */}

        {/* Place Holder for the breadcrumbs 

        <div className="layout-container my-2">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        */}

        <div className="flex justify-center">
          <Link href={props.locale === 'fr' ? 'fr/home' : '/home'}>
            <a>
              <img
                className="h-20"
                src="/Header-noborder.png"
                alt="Digital Dojo Logo / Logo du Dojo numérique"
              />
            </a>
          </Link>
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

  /**
   * Array of Items for the breadcrumb
   */
  // breadcrumbItems: propTypes.arrayOf(
  //   propTypes.shape({
  //     /**
  //      * Text for the breadcrumb
  //      */
  //     text: propTypes.string,

  //     /**
  //      * Link for the breadcrumb
  //      */
  //     link: propTypes.string,
  //   })
  // ),
}