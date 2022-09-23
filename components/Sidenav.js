import { useState } from 'react'
import Link from 'next/link'
import ThemeChanger from './ThemeChanger'

const Sidenav = ({ t }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`fixed transition-all duration-500 ${
        open ? 'left-0' : 'left-[-260px]'
      }`}
    >
      <button
        aria-label="toggle side menu"
        className="w-8 h-8 absolute left-[265px] space-y-1 bg-gray-900 p-2 cursor-pointer rounded hover:bg-gray-800 dark:bg-periwinkle"
        onClick={(e) => setOpen(!open)}
      >
        <div
          className={`w-4 h-0.5 bg-gray-200 ${
            open ? 'absolute top-[15px] left-[9px] rotate-45' : ''
          }`}
        ></div>
        <div className={`w-4 h-0.5 bg-gray-200 ${open ? 'hidden' : ''}`}></div>
        <div
          className={`w-4 h-0.5 bg-gray-200 ${
            open ? 'absolute top-[11px] left-[9px] -rotate-45' : ''
          }`}
        ></div>
      </button>
      <ThemeChanger />
      <div className="p-2 flex flex-col gap-4 fixed w-64 min-h-full bg-[#373737] text-white text-xl tracking-wide">
        <Link href="/home">
          <a className="hover:bg-periwinkle px-2">{t.home}</a>
        </Link>
        <label
          tabIndex={0}
          htmlFor="about-us"
          className="flex flex-col px-2 cursor-pointer"
          onKeyDown={(e) =>
            e.key === 'Enter'
              ? (document.getElementById('about-us').checked ^= 1)
              : null
          }
        >
          <div className="flex items-center hover:bg-periwinkle">
            {t.aboutUs} <span className="text-[9px] ml-2">&#9660;</span>
          </div>
          <input
            id="about-us"
            type="checkbox"
            className="items-center peer hidden"
          ></input>
          <Link href="/about/coaches">
            <a className="hidden peer-checked:block hover:bg-periwinkle px-5">
              {t.ourCoaches}
            </a>
          </Link>
          <Link href="">
            <a className="hidden peer-checked:block hover:bg-periwinkle px-5">
              {t.serviceCatalogue}
            </a>
          </Link>
        </label>
        <label
          tabIndex={0}
          htmlFor="dojo-assessment"
          className="flex flex-col px-2 cursor-pointer"
          onKeyDown={(e) =>
            e.key === 'Enter'
              ? (document.getElementById('dojo-assessment').checked ^= 1)
              : null
          }
        >
          <div className="flex items-center hover:bg-periwinkle">
            {t.dojoAssessment} <span className="text-[9px] ml-2">&#9660;</span>
          </div>
          <input
            id="dojo-assessment"
            type="checkbox"
            className="items-center peer hidden"
          ></input>
          <Link href="">
            <a className="hidden peer-checked:block hover:bg-periwinkle px-5">
              {t.beltSystem}
            </a>
          </Link>
        </label>
        <label
          tabIndex={0}
          htmlFor="dojo-engagement"
          className="flex flex-col px-2 cursor-pointer"
          onKeyDown={(e) =>
            e.key === 'Enter'
              ? (document.getElementById('dojo-engagement').checked ^= 1)
              : null
          }
        >
          <div className="flex items-center hover:bg-periwinkle">
            {t.dojoEngagement} <span className="text-[9px] ml-2">&#9660;</span>
          </div>
          <input
            id="dojo-engagement"
            type="checkbox"
            className="items-center peer hidden"
          ></input>
          <Link href="">
            <a className="hidden peer-checked:block hover:bg-periwinkle px-5">
              {t.startTeam}
            </a>
          </Link>
        </label>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">{t.events}</a>
        </Link>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">{t.tools}</a>
        </Link>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">{t.faq}</a>
        </Link>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">{t.contactUs}</a>
        </Link>
      </div>
    </div>
  )
}

export default Sidenav
