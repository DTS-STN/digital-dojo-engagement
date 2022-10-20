import DottedLine from '../components/DottedLine'
import en from '../locales/contact/en'
import fr from '../locales/contact/fr'



export default function Contact({ locale }) {
  const t = locale === 'en' ? en : fr

  const handleChange = e => {
    const { name, value } = e.target;
  
    this.setState({
      [name]: value
    });
  };
  
  
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
        action="mailto:ESDC.DGIIT.Dojo-Dojo.IITD.ESDC@hrsdc-rhdcc.gc.ca?Subject=Contact Form"
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
        <label htmlFor="work-location" className="font-bold text-periwinkle">
          {t.where}
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
        
        <label htmlFor="next-step" className="font-bold text-periwinkle">
          {t.nextStep}
        </label>
        <select
          required
          id="next-step"
          name="next-step"
          className="border-2 rounded"
        >
          <option></option>
          <option value="Meet with a Dojo Member">{t.meet}</option>
          <option value="Get a Presentation">{t.present}</option>
          <option value="Ask some questions">{t.questions}</option>
          <option value="Other">
            {t.other}
          </option>
        </select>
        <label htmlFor="tell-us" className="font-bold text-periwinkle">
          {t.tellUs}
        </label>
        <textarea
          type="textarea"
          id="tell-us"
          name="tell-us"
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
      title: "Dojo Numérique - Contactez Nous",
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
