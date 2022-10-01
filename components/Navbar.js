import Link from 'next/link'
import { useState } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar({ t }) {
  // states for opening/closing nav dropdowns
  const [about, setAbout] = useState(false)
  const [assessment, setAssessment] = useState(false)
  const [engagement, setEngagement] = useState(false)
  const [open, setOpen] = useState(false)

  // ensure dropdowns are closed before opening a new one
  // todo:  better approach needed?
  function handleClick(state, toggle) {
    ;[setAbout, setAssessment, setEngagement].forEach((fn) => fn(false))
    toggle(!state)
  }

  return (
    <nav>
      <button
        aria-label="toggle navigation menu"
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden hover:text-periwinkle text-2xl ml-1 p-1"
      >
        <GiHamburgerMenu />
      </button>
      <div
        className={`${
          !open ? 'hidden md:flex' : ''
        } flex flex-col gap-2 items-start md:flex-row md:justify-around md:items-center md:h-12 bg-periwinkle text-white px-2`}
      >
        <Link href="/home">
          <a className="hover:underline">{t.home}</a>
        </Link>
        <button
          className="relative"
          onClick={() => handleClick(about, setAbout)}
        >
          <div className="flex md:justify-center items-center gap-2 hover:underline">
            {t.aboutUs} <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              about ? 'flex flex-col items-start' : 'hidden'
            } bg-periwinkle md:absolute top-9 left-0'`}
          >
            <Link href="/about/coaches">
              <a className="w-full p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                {t.ourCoaches}
              </a>
            </Link>
            <Link href="">
              <a className="p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                {t.serviceCatalogue}
              </a>
            </Link>
          </div>
        </button>
        <button
          className="relative"
          onClick={() => handleClick(assessment, setAssessment)}
        >
          <div className="flex md:justify-center items-center gap-2 hover:underline">
            {t.dojoAssessment} <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              assessment ? 'flex flex-col items-start' : 'hidden'
            } bg-periwinkle w-full md:absolute top-9 left-0'`}
          >
            <Link href="">
              <a className="w-full p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                {t.beltSystem}
              </a>
            </Link>
          </div>
        </button>
        <button
          className="relative"
          onClick={() => handleClick(engagement, setEngagement)}
        >
          <div className="flex md:justify-center items-center gap-2 hover:underline">
            {t.dojoEngagement} <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              engagement ? 'flex flex-col items-start' : 'hidden'
            } bg-periwinkle w-full md:absolute top-9 left-0'`}
          >
            <Link href="">
              <a className="w-full p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                {t.startTeam}
              </a>
            </Link>
          </div>
        </button>
        <Link href="">
          <a className="hover:underline">{t.events}</a>
        </Link>
        <Link href="">
          <a className="hover:underline">{t.tools}</a>
        </Link>
        <Link href="">
          <a className="hover:underline">{t.faq}</a>
        </Link>
        <Link href="">
          <a className="hover:underline">{t.contactUs}</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
