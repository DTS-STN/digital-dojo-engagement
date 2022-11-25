import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FiCopy, FiEye, FiEyeOff } from 'react-icons/fi'
import { RiVipCrownFill } from 'react-icons/ri'
import { TbDoorExit } from 'react-icons/tb'
import { BiArrowToRight } from 'react-icons/bi'
import dojoDomains from '../../lib/dojoDomains'

let socket

export default function Room() {
  const router = useRouter()
  const room = router.query.room
  const user = router.query.user
  const domain = router.query.domain

  const [roomData, setRoomData] = useState()
  const [hide, setHide] = useState(true)
  const [timer, setTimer] = useState(30)
  const [timerStarted, setTimerStarted] = useState(false)

  useEffect(() => {
    socketInitializer()
  }, [])

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

  function handlePrincipleBtnClick(n) {
    let principles = Object.keys(dojoDomains[domain])
    let i = principles.indexOf(roomData.principle)
    let newPrinciple =
      principles[(i + n + principles.length) % principles.length]
    socket.emit('set-principle', { room, newPrinciple })
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

  function handleLeaveRoomClick() {
    socket.emit('leave-room', { room })
    router.push('/rooms')
  }

  function handleChatSubmit(e) {
    e.preventDefault()
    let msg = e.target.elements.chat.value
    if (msg) {
      socket.emit('chat-message', { room, msg })
      e.target.elements.chat.value = ''
    }
  }

  console.log(roomData)

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-2xl text-blue-800 mb-10 capitalize">
        Domain: {domain}
      </h1>
      <div className="mb-10">
        <div className="bg-lightPeriwinkle p-2 flex justify-between">
          <h2 className="text-xl">{roomData?.principle}</h2>
          {roomData && roomData?.connections?.[socket?.id]?.admin && (
            <div className="flex gap-5">
              <button
                onClick={() => handlePrincipleBtnClick(-1)}
                className="bg-periwinkle text-white px-2 py-1 rounded-xl hover:bg-darkPeriwinkle"
              >
                Previous Principle
              </button>
              <button
                onClick={() => handlePrincipleBtnClick(1)}
                className="bg-periwinkle text-white px-2 py-1 rounded-xl hover:bg-darkPeriwinkle"
              >
                Next Principle
              </button>
            </div>
          )}
        </div>
        <div>
          <div>Digital Dojo Practices:</div>
          <ul>
            {roomData &&
              dojoDomains?.[roomData?.domain]?.[
                roomData?.principle
              ]?.practices.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      </div>
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
            {roomData?.connections?.[socket?.id]?.admin && (
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

          <div className="my-5 flex justify-between font-bold text-periwinkle">
            <p>Users</p>
            <div className="flex items-center gap-2">
              {hide ? <FiEyeOff /> : <FiEye />}
              <p>Card</p>
            </div>
          </div>
          <div className="space-y-3">
            {roomData &&
              Object.entries(roomData?.connections).map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between shadow-lg h-16 rounded text-white"
                >
                  <div
                    className={`${
                      socket?.id === k
                        ? 'bg-periwinkle text-white'
                        : 'text-black'
                    } flex items-center px-2 rounded-tl rounded-bl border-r border-periwinkle min-w-[75px]`}
                  >
                    {v.user}
                    {v.admin ? (
                      <RiVipCrownFill
                        className={`ml-2 text-sm ${
                          socket?.id === k ? 'text-white' : 'text-periwinkle'
                        }`}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div
                    className={`flex items-center w-12 h-14 p-2 mr-1 my-auto mx-auto justify-center border-2 border-darkPeriwinkle text-black ${
                      v.belt ? '' : 'border-dashed'
                    }`}
                  >
                    {!v.belt ? (
                      ''
                    ) : socket?.id !== k && hide ? (
                      <img src="/card_back.jpg"></img>
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
                {roomData && Object.keys(roomData?.connections).length}
              </span>
            </p>
            <div className="my-5 flex justify-between p-3">
              <p className="font-bold text-periwinkle">Timer:</p>
              <div className="flex gap-2 ml-auto">
                {roomData && roomData?.connections?.[socket?.id]?.admin && (
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
            <div className="flex items-start justify-center">
              <button
                onClick={handleLeaveRoomClick}
                className="bg-periwinkle text-white hover:bg-darkPeriwinkle rounded px-2 py-1 flex items-center gap-2"
              >
                Leave Room <TbDoorExit />
              </button>
            </div>
          </div>
          <div>
            <p className="bg-lightPeriwinkle font-bold p-3 mt-5">Chat Room</p>
            <div className="min-h-[300px] max-h-[300px] overflow-y-scroll mt-2">
              {roomData &&
                roomData.chat.map((e, i) => (
                  <>
                    <p
                      className={`px-1 text-sm mx-2 font-bold ${
                        e.id === socket?.id ? 'text-right' : ''
                      }`}
                    >
                      {roomData.connections?.[e.id]?.user}:
                    </p>
                    <p
                      key={i}
                      className={`px-2 text-sm rounded bg-lightPeriwinkle mx-2 mb-2 break-words ${
                        e.id === socket?.id ? 'text-right' : ''
                      }`}
                    >
                      {e.msg}
                    </p>
                  </>
                ))}
            </div>
            <form
              onSubmit={handleChatSubmit}
              className="flex items-center justify-center"
            >
              <div className="flex w-full">
                <label htmlFor="chat" hidden>
                  chat box
                </label>
                <input
                  id="chat"
                  name="chat"
                  className="text-periwinkle flex-1 px-2 p-1 border border-periwinkle"
                  placeholder="Write a message"
                />
                <button
                  className="bg-periwinkle text-white w-8"
                  aria-label="submit chat message"
                >
                  <BiArrowToRight className="text-center mx-auto" />
                </button>
              </div>
            </form>
          </div>
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
