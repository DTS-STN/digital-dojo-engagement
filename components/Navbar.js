import Link from 'next/link'
import { useState } from 'react'
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar({ t }) {
  // states for opening/closing nav dropdowns
  const [about, setAbout] = useState(false)
  const [assessment, setAssessment] = useState(false)
  const [engagement, setEngagement] = useState(false)
  const [services, setServices] = useState(false)

  // hamburger icon open/close state (only available on small screens)
  const [open, setOpen] = useState(false)

  function falsifyAllStates() {
    ;[setAbout, setAssessment, setEngagement, setServices].forEach((fn) =>
      fn(false)
    )
  }

  // ensure dropdowns are closed before opening a new one
  // todo:  better approach needed?
  function handleClick(state, toggle) {
    falsifyAllStates()
    toggle(!state)
  }

  // for keyboard accesibility to close nav items on escape press (common practice)
  function handleEscape(e) {
    if (e.key === 'Escape') falsifyAllStates()
  }

  return (
    <nav onKeyDown={handleEscape}>
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
        <div
          tabIndex={0}
          className="relative"
          onClick={() => handleClick(about, setAbout)}
          onKeyDown={(e) =>
            e.key === 'Enter' ? handleClick(about, setAbout) : null
          }
        >
          <div className="flex md:justify-center items-center gap-2 hover:underline">
            {t.aboutUs} <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`peer w-[150px] ${
              about ? 'z-50 flex flex-col items-start' : 'hidden'
            } bg-periwinkle/50 md:absolute top-9 left-0'`}
          >
            <Link href="/about/coaches">
              <a className="w-full p-1 text-left hover:bg-periwinkle duration-200">
                {t.ourCoaches}
              </a>
            </Link>
            <Link href="/services">
              <a
                onFocus={() => setServices(true)}
                className="peer p-1 text-left hover:bg-periwinkle duration-200 flex items-center gap-1"
              >
                {t.serviceCatalogue} <GoTriangleRight className="text-xs" />
              </a>
            </Link>
          </div>
          <div
            className={`${
              services
                ? 'peer-hover:flex peer-hover:flex-col hover:flex hover:flex-col z-50 md:absolute top-[68px] left-[150px] flex flex-col w-36 bg-periwinkle'
                : 'md:hidden peer-hover:flex peer-hover:flex-col hover:flex hover:flex-col z-50 md:absolute top-[68px] left-[150px] flex flex-col w-36 bg-periwinkle'
            }`}
          >
            <Link href="/services/consultations">
              <a className="p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                {t.consultations}
              </a>
            </Link>
            <Link href="/services/workshops">
              <a className="p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                {t.workshops}
              </a>
            </Link>
            <Link href="/services/challenges">
              <a className="p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                {t.challenges}
              </a>
            </Link>
          </div>
        </div>
        <div
          tabIndex={0}
          className="relative"
          onClick={() => handleClick(assessment, setAssessment)}
          onKeyDown={(e) =>
            e.key === 'Enter' ? handleClick(assessment, setAssessment) : null
          }
        >
          <div className="flex md:justify-center items-center gap-2 hover:underline">
            {t.dojoAssessment} <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              assessment ? 'z-50 flex flex-col items-start' : 'hidden'
            } bg-periwinkle/50 w-full md:absolute top-9 left-0'`}
          >
            <Link href="/belt-assessment/belt-system">
              <a className="w-full p-1 text-left hover:bg-periwinkle duration-200">
                {t.beltSystem}
              </a>
            </Link>
          </div>
        </div>
        <div
          tabIndex={0}
          className="relative"
          onClick={() => handleClick(engagement, setEngagement)}
          onKeyDown={(e) =>
            e.key === 'Enter' ? handleClick(engagement, setEngagement) : null
          }
        >
          <div className="flex md:justify-center items-center gap-2 hover:underline">
            {t.dojoEngagement} <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              engagement ? 'z-50 flex flex-col items-start' : 'hidden'
            } bg-periwinkle/50 w-[180px] md:absolute top-9 left-0'`}
          >
            <Link href="/engagement">
              <a className="w-full p-1 text-left hover:bg-periwinkle duration-200">
                {t.startTeam}
              </a>
            </Link>
          </div>
        </div>
        <Link href="/events">
          <a className="hover:underline">{t.events}</a>
        </Link>
        <Link href="/tools-and-resources">
          <a className="hover:underline">{t.tools}</a>
        </Link>
        <Link href="/FAQ">
          <a className="hover:underline">{t.faq}</a>
        </Link>
        <Link href="/contact">
          <a className="hover:underline">{t.contactUs}</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
