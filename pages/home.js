import {
  IoIosArrowDropright,
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import DottedLine from '../components/DottedLine'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function HomePage({ locale }) {
  const router = useRouter()
  const stars = [5, 4, 3, 2, 1]
  const [star, setStar] = useState(0)

  function handleClick(k) {
    const i = stars.indexOf(star)
    setStar(Math.min(stars.length - 1, Math.max(0, star + k)))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-10 justify-center items-center">
        <div className="flex flex-col gap-3">
          <h1>Welcome to the Digital Dojo</h1>
          <p>
            Our Digital Dojo aims to provide an immersive virtual space where
            ESDC product teams can learn new skills and new ways to solve common
            problems with the help and guidance of GC Experts.
          </p>
          <div className="flex gap-3 mb-5">
            <button
              onClick={() => router.push('/engagement')}
              className="rounded-full bg-periwinkle text-white px-2 py-1 flex items-center justify-center gap-1 hover:bg-darkPeriwinkle"
            >
              Start an engagement
              <i role="presentation" className="text-xl">
                <IoIosArrowDropright />
              </i>
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="rounded-full text-periwinkle border-2 border-periwinkle px-2 py-1 flex items-center justify-center gap-1 hover:bg-darkPeriwinkle hover:text-white"
            >
              Get in touch!
              <i role="presentation" className="text-xl">
                <IoIosArrowDropright />
              </i>
            </button>
          </div>
          <DottedLine />
        </div>
        <div>
          <img src="/collab.png" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-periwinkle mb-5">Our Mandate</h2>
        <h3 className="text-lg text-periwinkle">This isn't training</h3>
        <p className="mb-2">
          Our goal is to help your team practice and directly implement new
          discipline.
        </p>
        <h3 className="text-lg text-periwinkle">
          Our coaches are here to help you achieve your goals
        </h3>
        <p className="mb-2">
          We can help your team manage complex work, streamline processes,
          increase communication and resiliency, and deliver with confidence.​
        </p>
        <h3 className="text-lg text-periwinkle">We meet you where you are</h3>
        <p className="mb-2">
          We are not here to tell you what to do. We work with you, hands-on, to
          learn new practices based on your objectives.​
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl text-periwinkle mb-10">Our Services</h2>
        <div className="block space-y-10 sm:space-y-0 sm:flex gap-10">
          <div className="border-2 sm:h-72">
            <div className="w-3/4 mx-auto my-5 min-h-36 sm:h-36">
              <img src="/consultations.png"></img>
            </div>
            <div className="bg-blue-700/70 text-white text-xl text-center mb-5">
              Consultations
            </div>
            <div className="text-center">
              <button
                onClick={() => router.push('/services/consultations')}
                className="bg-periwinkle text-white px-2 py-1 hover:bg-darkPeriwinkle rounded-full"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="border-2 sm:h-72">
            <div className="w-3/4 mx-auto my-5 min-h-36 sm:h-36">
              <img src="/workshops.png"></img>
            </div>
            <div className="bg-green-700/70 text-white text-xl text-center mb-5">
              Workshops
            </div>
            <div className="text-center">
              <button
                onClick={() => router.push('/services/workshops')}
                className="bg-periwinkle text-white px-2 py-1 hover:bg-darkPeriwinkle rounded-full"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="border-2 sm:h-72">
            <div className="w-3/4 mx-auto my-5 min-h-36 sm:h-36">
              <img src="/challenges.png"></img>
            </div>
            <div className="bg-pink-700/70 text-white text-xl text-center mb-5">
              Dojo Challenges
            </div>
            <div className="text-center">
              <button
                onClick={() => router.push('/services/challenges')}
                className="bg-periwinkle text-white px-2 py-1 hover:bg-darkPeriwinkle rounded-full"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl text-periwinkle mb-5">What sets us apart</h2>
        <h3 className="text-lg text-periwinkle">
          We work with your whole team
        </h3>
        <p className="mb-2">
          We focus on delivery as a team – business and IT. This builds trust,
          mutual understanding, cohesion, and​ collaboration.​
        </p>
        <h3 className="text-lg text-periwinkle">We take a GoC ​focus​</h3>
        <p className="mb-2">
          Our experience is based in realistic GoC IT practices, standards,
          languages, and challenges. We'll work with you wherever you are
          located, virtual or hybrid, with seamless collaboration.​
        </p>
        <h3 className="text-lg text-periwinkle">We have the ​same goals​</h3>
        <p className="mb-2">
          We want to see you succeed because it will make our organization
          better. We will connect you with internal experts, groups, and
          resources.​
        </p>
        <h3 className="text-lg text-periwinkle">
          We won't impact your budget​​
        </h3>
        <p className="mb-2">
          Our services are provided free of charge. They are covered by DTS and
          IITB's Innovation fund.​
        </p>
      </div>
      <hr className="border mt-10 mb-5"></hr>
      <div className="mt-10 flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl text-periwinkle">What people are saying</h2>
        <p>Testimonial blurb</p>
        <div className="flex items-center mt-5">
          <div>
            <button
              onClick={() => handleClick(-1)}
              className="text-4xl text-periwinkle mr-3 hover:text-darkPeriwinkle"
            >
              <IoIosArrowDropleftCircle />
            </button>
          </div>
          <div className="border p-5 rounded">
            <div className="flex items-center justify-between">
              <h4 className="text-periwinkle text-xl">
                Name of client, department or role
              </h4>
              <div className="flex ">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={`${
                        i < stars[star]
                          ? 'text-yellow-500'
                          : 'text-darkPeriwinkle'
                      }`}
                    />
                  ))}
              </div>
            </div>
            <p className="text-sm font-bold mb-3">
              {stars[star]} WEEK 2 DAYS AGO
            </p>
            <p className="text-periwinkle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rutrum ex nec magna consequat, nec porta diam molestie. Ut eget
              felis nec metus ullamcorper iaculis.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleClick(1)}
              className="text-4xl text-periwinkle ml-3 hover:text-darkPeriwinkle"
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          {stars.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-periwinkle ${
                i === star ? 'bg-periwinkle' : ''
              }`}
              role="presentation"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/home' : '/home'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Home',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Accueil',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
