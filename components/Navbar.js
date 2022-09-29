import Link from 'next/link'
import { useState } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
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
    <nav className="">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden hover:text-periwinkle text-2xl"
      >
        <GiHamburgerMenu />
      </button>
      <div
        className={`${
          !open ? 'hidden md:flex' : ''
        } flex flex-col items-start md:flex-row md:justify-around md:items-center md:h-12 bg-periwinkle text-white`}
      >
        <Link href="/home">
          <a>Home</a>
        </Link>
        <button
          className="relative"
          onClick={() => handleClick(about, setAbout)}
        >
          <div className="flex md:justify-center items-center gap-2">
            About <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              about ? 'flex flex-col items-start' : 'hidden'
            } bg-periwinkle md:absolute top-9 left-0'`}
          >
            <Link href="">
              <a className="w-full p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                Coaches
              </a>
            </Link>
            <Link href="">
              <a className="p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                Service Catalogue
              </a>
            </Link>
          </div>
        </button>
        <button
          className="relative"
          onClick={() => handleClick(assessment, setAssessment)}
        >
          <div className="flex md:justify-center items-center gap-2">
            Dojo Assessment <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              assessment ? 'flex flex-col items-start' : 'hidden'
            } bg-periwinkle w-full md:absolute top-9 left-0'`}
          >
            <Link href="">
              <a className="w-full p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                Belt System
              </a>
            </Link>
          </div>
        </button>
        <button
          className="relative"
          onClick={() => handleClick(engagement, setEngagement)}
        >
          <div className="flex md:justify-center items-center gap-2">
            Dojo Engagement <GoTriangleDown className="text-xs" />
          </div>
          <div
            className={`${
              engagement ? 'flex flex-col items-start' : 'hidden'
            } bg-periwinkle w-full md:absolute top-9 left-0'`}
          >
            <Link href="">
              <a className="w-full p-1 text-left hover:text-periwinkle hover:bg-white duration-200">
                Team Engagement
              </a>
            </Link>
          </div>
        </button>
        <Link href="">
          <a>Events</a>
        </Link>
        <Link href="">
          <a>Resources</a>
        </Link>
        <Link href="">
          <a>FAQ</a>
        </Link>
        <Link href="">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
