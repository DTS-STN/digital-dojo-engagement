import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'

function BeltResult({ t, id, result }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-2 border-2 mb-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-periwinkle font-bold">{t[id]}</h2>
        <button
          onClick={() => setOpen(!open)}
          aria-label="toggle belt result open or close"
          className="hover:text-periwinkle"
        >
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p className="text-[.9rem]">{t[`${id}-blurb`]}</p>
      <div className={`${open ? 'max-h-fit' : 'max-h-0 overflow-hidden'}`}>
        <img
          src={`/${result}_belt.png`}
          className="w-24"
          alt={`${result}`}
        ></img>
        <dl className="flex gap-2 font-bold text-periwinkle text-[.95rem]">
          <dt>Results:</dt>
          <dd>
            {!result || result === 'na'
              ? 'Not Applicable'
              : result?.replace(/^.| ./g, (e) => e.toUpperCase()) + ' Belt'}
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default BeltResult
