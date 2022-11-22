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
      <h1 className="text-2xl text-blue-800 mb-5">Socket Poker</h1>
      <div className="flex gap-10">
        <form className="flex flex-col gap-2" onSubmit={handleCreateRoom}>
          <label>Name:</label>
          <input
            className="border-2 rounded border-blue-800 px-1"
            name="admin"
          />
          <button className="bg-blue-800 text-white hover:bg-blue-900 cursor-pointer rounded self-start mx-auto px-1">
            Create Room
          </button>
        </form>
        <form className="flex flex-col gap-2" onSubmit={handleJoinRoom}>
          <label>Name:</label>
          <input
            className="border-2 rounded border-blue-800 px-1"
            name="name"
          />
          <label>Room:</label>
          <input
            className="border-2 rounded border-blue-800 px-1"
            name="room"
          />
          <button className="bg-blue-800 text-white hover:bg-blue-900 cursor-pointer rounded self-start mx-auto px-1">
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
