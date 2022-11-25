import DottedLine from '../../components/DottedLine'
import { useRouter } from 'next/router'

function randomRoom() {
  return Math.floor(Math.random() * 8999) + 1000
}

export default function Home() {
  const router = useRouter()

  function handleCreateRoom(e) {
    e.preventDefault()
    let admin = e.target.elements.admin.value
    let domain = e.target.elements.domain.value
    let room = randomRoom()
    router.push(
      { pathname: `/rooms/${room}`, query: { room, user: admin, domain } },
      `rooms/${room}`
    )
  }

  function handleJoinRoom(e) {
    e.preventDefault()
    let user = e.target.elements.name.value
    let room = e.target.elements.room.value
    router.push(
      { pathname: `/rooms/${room}`, query: { room, user } },
      `/rooms/${room}`
    )
  }

  return (
    <div className="p-2 max-w-2xl mx-auto">
      <h1 className="text-2xl text-periwinkle mb-5">Belt System</h1>
      <p>
        The Digital Dojo Belt System Self-Assessment is designed for your team
        to help identify your team's current knowledge of Agile, DevOps, and
        Design Thinking domains. They will help the Dojo team work with you to
        improve your skills throughout an engagement.
      </p>
      <DottedLine />
      <h2 className="text-periwinkle text-2xl mb-5">How-to Assess</h2>
      <p className="mb-5">
        We have developed an interactive self-assessmenr voting tool for your
        team.
      </p>
      <p className="mb-10">
        When you enter a room, you will have the ability to anonymously vote on
        topics and questions based on our Dojo belt system.
      </p>
      <div className="flex justify-around w-full">
        <form
          className="flex flex-col gap-2 border-2 p-4"
          onSubmit={handleCreateRoom}
        >
          <h2 className="text-xl text-periwinkle text-center">Create a Room</h2>
          <label htmlFor="admin">Name:</label>
          <input
            required
            pattern="[A-Za-z]{1,}"
            minLength="1"
            className="border-2 rounded border-periwinkle px-1"
            id="admin"
            name="admin"
          />
          <label htmlFor="domain">Domain:</label>
          <select
            name="domain"
            id="domain"
            className="px-1 py-0 border-periwinkle border-2 mb-5"
          >
            <option disabled selected value="DEFAULT">
              select a domain
            </option>
            <option value="agile">Agile</option>
            <option value="devops">DevOps</option>
            <option value="design thinking">Design Thinking</option>
          </select>
          <button className="bg-periwinkle text-white hover:bg-darkPeriwinkle cursor-pointer rounded self-start mx-auto px-1 mt-auto">
            Create Room
          </button>
        </form>
        <form
          className="flex flex-col gap-2 border-2 p-4"
          onSubmit={handleJoinRoom}
        >
          <h2 className="text-xl text-periwinkle text-center">Join a Room</h2>
          <label>Name:</label>
          <input
            required
            pattern="[A-Za-z]{1,}"
            minLength="1"
            className="border-2 rounded border-periwinkle px-1"
            name="name"
          />
          <label>Room:</label>
          <input
            required
            className="border-2 rounded border-periwinkle px-1"
            name="room"
          />
          <button className="bg-periwinkle text-white hover:bg-darkPeriwinkle cursor-pointer rounded self-start mx-auto px-1 mt-auto">
            Join Room
          </button>
        </form>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/rooms' : '/rooms'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Rooms',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Rooms',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
