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
    let room = randomRoom()
    router.push(
      { pathname: `/rooms/${room}`, query: { room, user: admin } },
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
        to help identify your team's current knowledge pf Agile, DevOps, and
        Design Thinking domains. Thye will help the Dojo team work with you to
        improve your skills throughout an engagement.
      </p>
      <DottedLine />
      <div className="flex justify-around w-full">
        <form
          className="flex flex-col gap-2 border-2 p-4"
          onSubmit={handleCreateRoom}
        >
          <h2 className="text-xl text-periwinkle text-center">Create a Room</h2>
          <label htmlFor="admin">Name:</label>
          <input
            className="border-2 rounded border-periwinkle px-1"
            id="admin"
            name="admin"
          />
          <label htmlFor="domain">Select a domain:</label>
          <select
            name="domain"
            id="domain"
            className="px-1 py-0 border-periwinkle border-2 mb-5"
          >
            <option disabled selected value>
              select an option
            </option>
            <option value="agile">Agile</option>
            <option value="devops">DevOps</option>
            <option value="design thinking">Design Thinking</option>
          </select>
          <button className="bg-periwinkle text-white hover:bg-blue-900 cursor-pointer rounded self-start mx-auto px-1 mt-auto">
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
            className="border-2 rounded border-periwinkle px-1"
            name="name"
          />
          <label>Room:</label>
          <input
            className="border-2 rounded border-periwinkle px-1"
            name="room"
          />
          <button className="bg-periwinkle text-white hover:bg-blue-900 cursor-pointer rounded self-start mx-auto px-1 mt-auto">
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
