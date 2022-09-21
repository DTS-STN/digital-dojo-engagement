import { useState } from 'react'
import Link from 'next/link'

const Sidenav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`fixed transition-all duration-500 ${
        open ? 'left-0' : 'left-[-260px]'
      }`}
    >
      <button
        aria-label="toggle side menu"
        className="w-8 h-8 absolute left-[265px] space-y-1 bg-gray-900 p-2 cursor-pointer rounded hover:bg-gray-800"
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
      <div className="p-2 flex flex-col gap-4 fixed w-64 min-h-full bg-[#373737] text-white text-xl tracking-wide">
        <Link href="/home">
          <a className="hover:bg-periwinkle px-2">Home</a>
        </Link>
        <label
          tabIndex={0}
          labelFor="about-us"
          className="flex flex-col px-2"
          onKeyDown={(e) =>
            e.key === 'Enter'
              ? (document.getElementById('about-us').checked ^= 1)
              : null
          }
        >
          <div className="flex items-center">
            About us <span className="text-[9px] ml-2">&#9660;</span>
          </div>
          <input
            id="about-us"
            type="checkbox"
            className="items-center peer hidden"
          ></input>
          <Link href="">
            <a className="peer-checked:hidden hover:bg-periwinkle px-5">
              Our Coaches
            </a>
          </Link>
          <Link href="">
            <a className="peer-checked:hidden hover:bg-periwinkle px-5">
              Service Catalogue
            </a>
          </Link>
        </label>
        <label
          tabIndex={0}
          labelFor="dojo-assessment"
          className="flex flex-col px-2"
          onKeyDown={(e) =>
            e.key === 'Enter'
              ? (document.getElementById('dojo-assessment').checked ^= 1)
              : null
          }
        >
          <div className="flex items-center">
            Dojo Assesment <span className="text-[9px] ml-2">&#9660;</span>
          </div>
          <input
            id="dojo-assessment"
            type="checkbox"
            className="items-center peer hidden"
          ></input>
          <Link href="">
            <a className="peer-checked:hidden hover:bg-periwinkle px-5">
              Belt System
            </a>
          </Link>
        </label>
        <label
          tabIndex={0}
          labelFor="dojo-engagement"
          className="flex flex-col px-2"
          onKeyDown={(e) =>
            e.key === 'Enter'
              ? (document.getElementById('dojo-engagement').checked ^= 1)
              : null
          }
        >
          <div className="flex items-center">
            Dojo Engagement <span className="text-[9px] ml-2">&#9660;</span>
          </div>
          <input
            id="dojo-engagement"
            type="checkbox"
            className="items-center peer hidden"
          ></input>
          <Link href="">
            <a className="peer-checked:hidden hover:bg-periwinkle px-5">
              Start team engagement
            </a>
          </Link>
        </label>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">Events</a>
        </Link>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">Tools &amp; Resources</a>
        </Link>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">FAQ</a>
        </Link>
        <Link href="">
          <a className="hover:bg-periwinkle px-2">Contact us</a>
        </Link>
      </div>
    </div>
  )
}

export default Sidenav
