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
  const [initTimer, setInitTimer] = useState(30)
  const [timer, setTimer] = useState(30)
  const [timerStarted, setTimerStarted] = useState(false)

  // Notify user if they actually want to refresh the page
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('beforeunload', (e) => {
        e.preventDefault()
        e.returnValue = ''
        socket.emit('leave-room', { room })
      })
    }
  }, [])

  // Initialize socket server/client
  useEffect(() => {
    socketInitializer()
  }, [])

  // Timer operations for setting/clearing intervals
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

  // socket initialization function and event handlers
  const socketInitializer = async () => {
    await fetch('/api/socket')

    socket = io()

    if (!user) {
      socket.emit('leave-room', { room })
      router.push('/rooms')
    }

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

    socket.on('disconnect', () => {
      socket.emit('leave-room', { room })
    })
  }

  function handlePrincipleBtnClick(n) {
    setHide(true)
    socket.emit('clear-cards', { room })
    let principles = Object.keys(dojoDomains[roomData?.domain])
    let i = principles.indexOf(roomData.principle)
    let newPrinciple =
      principles[Math.min(principles.length - 1, Math.max(0, i + n))]
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
    socket.emit('update-timer', { room, timer: initTimer + 1 })
  }

  function handleLeaveRoomClick() {
    socket.emit('leave-room', { room })
    router.push('/rooms')
    socket.emit('leave-room', { room })
  }

  function handleChatSubmit(e) {
    e.preventDefault()
    let msg = e.target.elements.chat.value
    if (msg) {
      socket.emit('chat-message', { room, msg })
      e.target.elements.chat.value = ''
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-2xl text-blue-800 mb-10 capitalize">
        Domain: {roomData?.domain}
      </h1>
      <div className="mb-10 border-2">
        <div className="bg-lightPeriwinkle p-2 flex justify-between">
          <h2 className="text-xl">{roomData?.principle}</h2>
          {roomData && roomData?.connections?.[socket?.id]?.admin && (
            <div className="flex gap-5">
              {roomData &&
                roomData?.connections?.[socket?.id]?.admin &&
                Object.keys(dojoDomains[roomData?.domain]).indexOf(
                  roomData.principle
                ) > 0 && (
                  <button
                    onClick={() => handlePrincipleBtnClick(-1)}
                    className="bg-periwinkle text-white px-2 py-1 rounded-xl hover:bg-darkPeriwinkle"
                  >
                    Previous Principle
                  </button>
                )}
              {roomData &&
                roomData?.connections?.[socket?.id]?.admin &&
                Object.keys(dojoDomains[roomData?.domain]).indexOf(
                  roomData.principle
                ) <
                  Object.keys(dojoDomains[roomData?.domain]).length - 1 && (
                  <button
                    onClick={() => handlePrincipleBtnClick(1)}
                    className="bg-periwinkle text-white px-2 py-1 rounded-xl hover:bg-darkPeriwinkle"
                  >
                    Next Principle
                  </button>
                )}
            </div>
          )}
        </div>
        <div className="flex gap-10 mt-5 px-5">
          <div className="font-bold">Digital Dojo Practices:</div>
          <ul className="list-disc list-inside">
            {roomData &&
              dojoDomains?.[roomData?.domain]?.[
                roomData?.principle
              ]?.practices.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
        <div className="space-y-5 p-5">
          {roomData &&
            Object.entries(
              dojoDomains?.[roomData?.domain]?.[roomData?.principle]?.belts
            ).map(([belt, qualities], i) => (
              <div key={belt + i} className="flex gap-5 items-center">
                <div>
                  <img
                    src={`/${belt}_poker_belt.png`}
                    alt={`/${belt} poker belt`}
                    className="w-20 rounded-lg border-2 p-1 shadow-lg"
                  />
                </div>
                <ul className="list-disc list-inside rounded-lg border-2 border-black px-5 py-2 shadow-lg w-full">
                  {qualities.map((quality, i) => (
                    <li key={quality + i} className="w-full">
                      {quality}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="md:flex gap-5">
        <div className="md:w-2/3 mb-5">
          <div className="flex justify-between">
            <button
              onClick={() => handleCardClick('white')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
              aria-label="white poker belt select"
            >
              <img src="/white_poker_belt.png" alt="white poker belt"></img>
            </button>
            <button
              onClick={() => handleCardClick('yellow')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
              aria-label="yellow poker belt select"
            >
              <img src="/yellow_poker_belt.png" alt="yellow poker belt"></img>
            </button>
            <button
              onClick={() => handleCardClick('green')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
              aria-label="green poker belt select"
            >
              <img src="/green_poker_belt.png" alt="green poker belt"></img>
            </button>
            <button
              onClick={() => handleCardClick('black')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
              aria-label="black poker belt select"
            >
              <img src="/black_poker_belt.png" alt="black poker belt"></img>
            </button>
            <button
              onClick={() => handleCardClick('na')}
              className="w-24 h-32 px-4 border-2 rounded shadow-lg hover:scale-105 duration-200"
              aria-label="unknown belt select"
            >
              <img src="/na_poker_belt.png" alt="unknown poker belt"></img>
            </button>
          </div>

          <div className="mt-7 flex justify-center gap-10">
            {roomData?.connections?.[socket?.id]?.admin && (
              <>
                <button
                  onClick={handleHideClick}
                  className="px-2 rounded bg-periwinkle text-white hover:bg-darkPeriwinkle"
                >
                  {hide ? 'Show' : 'Hide'}
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
              Object.entries(roomData?.connections).map(
                ([k, v]) =>
                  v.user && (
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
                              socket?.id === k
                                ? 'text-white'
                                : 'text-periwinkle'
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
                          <img
                            src="/card_back.JPG"
                            alt={`${v.belt} belt`}
                          ></img>
                        ) : (
                          <img src={`/${v.belt}_poker_belt.png`}></img>
                        )}
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
        <aside className="flex flex-col border md:w-1/3">
          <div>
            <p className="bg-lightPeriwinkle p-3 font-bold">
              Room Code:
              <button
                title="copy room code"
                onClick={() => navigator.clipboard.writeText(room)}
                className="font-semibold float-right relative mr-2 hover:text-darkPeriwinkle"
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
                  <>
                    <input
                      type="number"
                      min={0}
                      max={60}
                      step={5}
                      onChange={(e) => setInitTimer(+e.target.value)}
                      placeholder="duration"
                      className="w-24 border-2 text-sm px-1 py-0"
                    />
                    <button
                      onClick={handleTimerClick}
                      className="px-2 rounded bg-periwinkle text-white hover:bg-darkPeriwinkle"
                    >
                      Start
                    </button>
                  </>
                )}
                <div
                  className={`${
                    timer < 10 ? 'text-red-700' : 'text-periwinkle'
                  } border-2 w-10 px-1 text-right`}
                >
                  :{('0' + Math.max(0, timer)).slice(-2)}
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
      title: 'Dojo Num??rique - Rooms',
      desc: 'Fran??ais',
      author: '',
      keywords: '',
    },
  }

  return {
    props: { locale, langToggleLink, meta },
  }
}
