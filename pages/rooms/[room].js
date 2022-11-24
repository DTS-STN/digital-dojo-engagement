import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FiCopy, FiEye, FiEyeOff } from 'react-icons/fi'
import { RiVipCrownFill } from 'react-icons/ri'

let socket

export default function Room() {
  const router = useRouter()
  const room = router.query.room
  const user = router.query.user
  const domain = router.query.domain

  const [roomData, setRoomData] = useState({})
  const [hide, setHide] = useState(true)
  const [timer, setTimer] = useState(30)
  const [timerStarted, setTimerStarted] = useState(false)

  useEffect(() => {
    socketInitializer()
  }, [])

  console.log(roomData)

  useEffect(() => {
    let interval
    if (timerStarted) {
      interval = setInterval(() => {
        if (timer <= 1) {
          setTimerStarted(false)
          clearInterval(interval)
        }
        socket.emit('update-timer', { room, timer })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timerStarted, timer])

  const socketInitializer = async () => {
    await fetch('/api/socket')

    socket = io()

    socket.emit('join-room', { room, user, domain })

    socket.on('room-data', (roomData) => {
      setRoomData(roomData)
    })

    socket.on('hide-from-server', (hide) => {
      setHide(hide)
    })

    socket.on('update-timer-from-server', (timer) => {
      setTimer(timer)
    })
  }

  function handleCardClick(colour) {
    socket.emit('select-belt-colour', { room, colour })
  }

  function handleHideClick() {
    socket.emit('hide-cards', { room, hide: !hide })
  }

  function handleClearCards() {
    socket.emit('clear-cards', { room })
  }

  function handleTimerClick() {
    if (timerStarted) {
      setTimerStarted(false)
    }
    setTimerStarted(true)
    socket.emit('update-timer', { room, timer: 31 })
  }

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-2xl text-blue-800 mb-10">
        Socket Poker Room #{room}
      </h1>
      <div className="md:flex gap-5">
        <div className="md:w-2/3 mb-5">
          <div className="flex justify-between">
            <button
              onClick={() => handleCardClick('white')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
            >
              <img src="/white_poker_belt.png"></img>
            </button>
            <button
              onClick={() => handleCardClick('yellow')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
            >
              <img src="/yellow_poker_belt.png"></img>
            </button>
            <button
              onClick={() => handleCardClick('green')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
            >
              <img src="/green_poker_belt.png"></img>
            </button>
            <button
              onClick={() => handleCardClick('black')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
            >
              <img src="/black_poker_belt.png"></img>
            </button>
            <button
              onClick={() => handleCardClick('na')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
            >
              <img src="/na_poker_belt.png"></img>
            </button>
          </div>

          <div className="mt-7 flex justify-center gap-10">
            {roomData[socket?.id]?.admin && (
              <>
                <button
                  onClick={handleHideClick}
                  className="px-2 rounded bg-periwinkle text-white hover:bg-darkPeriwinkle"
                >
                  Hide
                </button>
                <button
                  onClick={handleClearCards}
                  className="px-2 rounded bg-periwinkle text-white hover:bg-darkPeriwinkle"
                >
                  Clear
                </button>
              </>
            )}
          </div>

          <div className="mt-5 flex justify-between font-bold text-periwinkle">
            <p>Users</p>
            <div className="flex items-center gap-2">
              {hide ? <FiEyeOff /> : <FiEye />}
              <p>Card</p>
            </div>
          </div>
          <div className="space-y-3">
            {Object.entries(roomData).map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between shadow-lg h-16 rounded"
              >
                <div
                  className={`${
                    socket?.id === k ? 'bg-red-100' : ''
                  } flex items-center px-2 rounded-tl rounded-bl`}
                >
                  {v.user}
                  {roomData[k]?.admin ? (
                    <RiVipCrownFill className="ml-2 text-darkPeriwinkle text-sm" />
                  ) : (
                    ''
                  )}
                </div>
                <div className="flex items-center px-2 w-12 h-14 py-2 border mr-1 my-auto mx-auto justify-center">
                  {(socket?.id !== k && hide) || !v.belt ? (
                    '???'
                  ) : (
                    <img src={`/${v.belt}_poker_belt.png`}></img>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="flex flex-col border md:w-1/3">
          <div>
            <p className="bg-lightPeriwinkle p-3 font-bold">
              Room Code:
              <button
                onClick={() => navigator.clipboard.writeText(room)}
                className="font-semibold float-right relative mr-2"
              >
                {room}
                <FiCopy className="absolute -top-2 -right-4" />
              </button>
            </p>
            <p className="p-3 font-bold text-periwinkle">
              Players Name:
              <span className="font-bold float-right">{user}</span>
            </p>
            <p className="p-3 font-bold text-periwinkle">
              Players Online:
              <span className="font-bold float-right">
                {Object.keys(roomData).length}
              </span>
            </p>
            <div className="my-5 flex justify-between p-3">
              <p className="font-bold text-periwinkle">Timer:</p>
              <div className="flex gap-2 ml-auto">
                {roomData[socket?.id]?.admin && (
                  <button
                    onClick={handleTimerClick}
                    className="px-2 rounded bg-periwinkle text-white hover:bg-darkPeriwinkle"
                  >
                    Timer
                  </button>
                )}
                <div
                  className={`${
                    timer < 10 ? 'text-red-700' : 'text-periwinkle'
                  } border-2 w-10 px-1 text-right`}
                >
                  :{('0' + timer).slice(-2)}
                </div>
              </div>
            </div>
          </div>
          <div>chatbox</div>
        </aside>
      </div>
    </div>
  )
}

export async function getServerSideProps({ locale }) {
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
