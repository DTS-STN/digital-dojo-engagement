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
        className="w-8 h-8 absolute left-[265px] space-y-1 bg-gray-800 p-2 cursor-pointer rounded hover:bg-gray-900"
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
      <div className="p-2 flex flex-col fixed w-64 min-h-full bg-gray-600 text-white text-xl tracking-wide">
        <Link href="/home">
          <a className="hover:bg-periwinkle px-2">Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Sidenav
