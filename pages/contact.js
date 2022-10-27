import DottedLine from '../components/DottedLine'
import en from '../locales/contact/en'
import fr from '../locales/contact/fr'
import { useState } from 'react'

export default function Contact({ locale }) {
  const t = locale === 'en' ? en : fr
  const [state, setState] = useState({})
  const [status, setStatus] = useState()

  function handleChange(e) {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setStatus()
      let res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(res)
      setStatus(res.status)
    } catch (e) {
      setStatus(500)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-center">{t.h1}</h1>
      <DottedLine />
      <p className="text-periwinkle mb-2">{t.p1}</p>
      <p className="text-[.98rem] mb-2">
        {t.p2}
        <a
          href="mailto:ESDC.DGIIT.Dojo-Dojo.IITD.ESDC@hrsdc-rhdcc.gc.ca"
          className="ml-1 underline text-[.95rem] text-periwinkle"
        >
          {t.a}
        </a>
      </p>
      {status !== 200 && (
        <form
          className="flex flex-col gap-3 text-[.9rem] mt-10"
          aria-describedby="required"
          onSubmit={handleSubmit}
        >
          <p id="required" className="text-[.85rem] text-periwinkle">
            {t.imp}
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="font-bold text-periwinkle">
                {t.fn}
              </label>
              <input
                required
                id="firstName"
                name="firstName"
                className="border-2 rounded py-2 px-3"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="font-bold text-periwinkle">
                {t.ln}
              </label>
              <input
                required
                id="lastName"
                name="lastName"
                className="border-2 rounded py-2 px-3"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <label htmlFor="email" className="font-bold text-periwinkle">
            {t.email}
          </label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className="border-2 rounded"
            onChange={handleChange}
          ></input>
          <label htmlFor="workLocation" className="font-bold text-periwinkle">
            {t.where}
          </label>
          <select
            required
            id="workLocation"
            name="workLocation"
            className="border-2 rounded"
            onChange={handleChange}
          >
            <option></option>
            <option value="IITB">{t.iitb}</option>
            <option value="Other - ESDC">{t.otherEsdc}</option>
            <option value="Other - Government of Canada">{t.otherGoc}</option>
            <option value="Other - Outside the Government of Canada">
              {t.otherOutsideGoc}
            </option>
          </select>

          <label htmlFor="nextStep" className="font-bold text-periwinkle">
            {t.nextStep}
          </label>
          <select
            required
            id="nextStep"
            name="nextStep"
            className="border-2 rounded"
            onChange={handleChange}
          >
            <option></option>
            <option value="Meet with a Dojo Member">{t.meet}</option>
            <option value="Get a Presentation">{t.present}</option>
            <option value="Ask some questions">{t.questions}</option>
            <option value="Other">{t.other}</option>
          </select>
          <label htmlFor="tellUs" className="font-bold text-periwinkle">
            {t.tellUs}
          </label>
          <textarea
            type="textarea"
            id="tellUs"
            name="tellUs"
            className="border-2 rounded"
            onChange={handleChange}
          ></textarea>

          <label htmlFor="howFind" className="font-bold text-periwinkle">
            {t.howFindOut}
          </label>
          <textarea
            id="howFind"
            name="howFind"
            className="border-2 rounded"
            onChange={handleChange}
          ></textarea>

          <button className="py-1 bg-blue-700 text-white rounded hover:bg-blue-800">
            {t.submit}
          </button>
        </form>
      )}
      {status && (
        <div
          role="status"
          className={`${
            status === 200 ? 'bg-green-700' : 'bg-red-700'
          } mt-5 rounded text-white text-center font-semi-bold px-3 py-2`}
        >
          {t[status === 200 ? 'emailSent' : 'emailNotSent']}
        </div>
      )}
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/contact' : '/contact'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Contact',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Contactez Nous',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
