import { Popover } from '@headlessui/react'
import { FiMapPin, FiCalendar, FiX } from 'react-icons/fi'
BsTextLeft
import { BsTextLeft } from 'react-icons/bs'
import dayjs from 'dayjs'

export default function CalendarEvent({ event, hasMultipleEvents }) {
  const shortenText = (text) => {
    if (text.length > 5) return text.substring(0, 20) + '...'
    return text
  }
  return (
    <Popover
      className={`relative w-full my-px ${
        hasMultipleEvents
          ? 'whitespace-nowrap border border-periwinkle rounded'
          : ''
      }`}
    >
      <div className="overflow-hidden">
        <Popover.Button>
          <p className="text-xs text-periwinkel leading-tight">{event.title}</p>
        </Popover.Button>
      </div>

      <Popover.Panel className="absolute z-10 w-96 bg-white drop-shadow-2xl rounded border border-periwinkle my-2">
        <div className="flex flex-row justify-between bg-periwinkle text-white px-1">
          <div className="flex flex-col ">
            <p className="text-lg">{event.title}</p>
            <p className="text-sm">
              {dayjs(event.startDate).format('dddd, MMMM D, YYYY')}
            </p>
            <p className="text-sm">
              {dayjs(event.startDate).format('HH:mm')} -{' '}
              {dayjs(event.endDate).format('HH:mm')}
            </p>
          </div>
          <Popover.Button
            className="cursor-pointer mt-2 ml-2 rounded-full bg-black/30"
            as={FiX}
          />
        </div>
        <div className="flex flex-col p-2">
          <div className="flex flex-row items-start">
            <FiMapPin className="shrink-0 mr-2 my-2" />
            <p className="text-sm">{event.location}</p>
          </div>
          <div className="flex flex-row items-start">
            <BsTextLeft className="shrink-0 mr-2 my-2" />
            <p className="text-sm">{event.description}</p>
          </div>
          <div className="flex flex-row items-start">
            <FiCalendar className="shrink-0 mr-2 my-2" />
            <p className="text-sm">Add to my calendar</p>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
