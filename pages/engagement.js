import DottedLine from '../components/DottedLine'
import en from '../locales/engagement/en'
import fr from '../locales/engagement/fr'

export default function Engagement({ locale }) {
  const t = locale === 'en' ? en : fr
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
      <form
        className="flex flex-col gap-3 text-[.9rem] mt-10"
        aria-describedby="required"
        action="mailto:ESDC.DGIIT.Dojo-Dojo.IITD.ESDC@hrsdc-rhdcc.gc.ca?Subject=Start Team Engagement"
        method="post"
        encType="text/plain"
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
              className="border-2 rounded"
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
              className="border-2 rounded"
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
          className="border-2 rounded"
        ></input>
        <label htmlFor="work-location" className="font-bold text-periwinkle">
          {t.work}
        </label>
        <select
          required
          id="work-location"
          name="work-location"
          className="border-2 rounded"
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
        ></input>

        <fieldset className="flex flex-col">
          <legend className="font-bold text-periwinkle">{t.dates}</legend>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              required
              id="yes"
              name="dates"
              className="border-2 rounded"
            ></input>
            <label htmlFor="yes">{t.y}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="no"
              name="dates"
              className="border-2 rounded"
            ></input>
            <label htmlFor="no">{t.n}</label>
          </div>
        </fieldset>

        <fieldset className="flex flex-col">
          <legend className="font-bold text-periwinkle">{t.practice}</legend>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              required
              id="agile"
              name="practice"
              className="border-2 rounded"
            ></input>
            <label htmlFor="agile">{t.agile}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="cicd"
              name="practice"
              className="border-2 rounded"
            ></input>
            <label htmlFor="cicd">{t.cicd}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="automation"
              name="practice"
              className="border-2 rounded"
            ></input>
            <label htmlFor="automation">{t.testAuto}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="cloud"
              name="practice"
              className="border-2 rounded"
            ></input>
            <label htmlFor="cloud">{t.cloudAuto}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="unsure"
              name="practice"
              className="border-2 rounded"
            ></input>
            <label htmlFor="unsure">{t.other}</label>
          </div>
        </fieldset>

        <label htmlFor="what-else" className="font-bold text-periwinkle">
          {t.whatElse}
        </label>
        <textarea
          type="textarea"
          id="what-else"
          name="what-else"
          className="border-2 rounded"
        ></textarea>

        <label htmlFor="how-find" className="font-bold text-periwinkle">
          {t.howFindOut}
        </label>
        <textarea
          id="how-find"
          name="how-find"
          className="border-2 rounded"
        ></textarea>

        <button className="py-1 bg-blue-700 text-white rounded hover:bg-blue-800">
          {t.submit}
        </button>
      </form>
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
