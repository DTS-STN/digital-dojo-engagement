import DottedLine from '../components/DottedLine'
import en from '../locales/engagement/en'
import fr from '../locales/engagement/fr'
import { useState } from 'react'

export default function Engagement({ locale }) {
  const t = locale === 'en' ? en : fr
  const [state, setState] = useState({})
  const [status, setStatus] = useState()

  function handleChange(e) {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.type === 'radio' ? e.target.id : e.target.value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setStatus()
      let res = await fetch('/api/startEngagement', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setStatus(res.status)
    } catch (e) {
      console.log(e)
      setStatus(500)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-2">
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
            <label htmlFor="first_name" className="font-bold text-periwinkle">
              {t.fn}
            </label>
            <input
              required
              id="first_name"
              name="first_name"
              className="border-2 rounded py-2 px-3"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="last_name" className="font-bold text-periwinkle">
              {t.ln}
            </label>
            <input
              required
              id="last_name"
              name="last_name"
              className="border-2 rounded py-2 px-3"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <label htmlFor="team_name" className="font-bold text-periwinkle">
          {t.tn}
        </label>
        <input
          required
          id="team_name"
          name="team_name"
          className="border-2 rounded py-2 px-3"
          onChange={handleChange}
        ></input>
        <label htmlFor="work_location" className="font-bold text-periwinkle">
          {t.where}
        </label>
        <select
          required
          id="work_location"
          name="work_location"
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

        <fieldset className="flex flex-col">
          <legend className="font-bold text-periwinkle">{t.dates}</legend>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              required
              id="Yes"
              name="dates"
              className="border-2 rounded"
              onChange={handleChange}
            ></input>
            <label htmlFor="Yes">{t.y}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="No"
              name="dates"
              className="border-2 rounded"
            ></input>
            <label htmlFor="No">{t.n}</label>
          </div>
        </fieldset>

        <fieldset className="flex flex-col">
          <legend className="font-bold text-periwinkle">{t.practice}</legend>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              required
              id="Agile"
              name="practice"
              className="border-2 rounded"
              onChange={handleChange}
            ></input>
            <label htmlFor="Agile">{t.agile}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="CI/CD"
              name="practice"
              className="border-2 rounded"
              onChange={handleChange}
            ></input>
            <label htmlFor="CI/CD">{t.cicd}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="Test Automation"
              name="practice"
              className="border-2 rounded"
              onChange={handleChange}
            ></input>
            <label htmlFor="Test Automation">{t.testAuto}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="Cloud Automation"
              name="practice"
              className="border-2 rounded"
              onChange={handleChange}
            ></input>
            <label htmlFor="Cloud Automation">{t.cloudAuto}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="Unsure"
              name="practice"
              className="border-2 rounded"
              onChange={handleChange}
            ></input>
            <label htmlFor="Unsure">{t.other}</label>
          </div>
        </fieldset>

        <label htmlFor="what_else" className="font-bold text-periwinkle">
          {t.whatElse}
        </label>
        <textarea
          type="textarea"
          id="what_else"
          name="what_else"
          className="border-2 rounded"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="how_find" className="font-bold text-periwinkle">
          {t.howFindOut}
        </label>
        <textarea
          id="how_find"
          name="how_find"
          className="border-2 rounded"
          onChange={handleChange}
        ></textarea>

        <button className="mt-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
          {t.submit}
        </button>
      </form>
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
  const langToggleLink = locale === 'en' ? '/fr/engagement' : '/engagement'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Team Engagement',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: "Dojo Numérique - Mobilisation d'équipe",
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
