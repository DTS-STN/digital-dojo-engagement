import { generateWeek, DAYS, MONTHS } from '../lib/calendarUtils'
import CalendarListEvent from './CalendarListEvent'
import dayjs from 'dayjs'
import { useState } from 'react'

export default function CalendarList({
  events,
  toggleCalenderView,
  isCalendarView,
  t,
}) {
  const currentDate = dayjs()
  const [today, setToday] = useState(currentDate)

  return (
    <div className="w-full">
      <div className="flex mb-3">
        <div>
          <button
            onClick={() => {
              setToday(today.subtract(1, 'week'))
            }}
            className="uppercase rounded text-periwinkle border px-2 border-periwinkle hover:bg-periwinkle hover:text-white "
          >
            {t.prev}
          </button>
          <button
            onClick={() => {
              setToday(today.add(1, 'week'))
            }}
            className="uppercase rounded text-periwinkle border px-2 border-periwinkle hover:bg-periwinkle hover:text-white ml-1"
          >
            {t.next}
          </button>
        </div>
        <div>
          <p className="text-periwinkle text-xl font-bold mx-3">
            {MONTHS[today.month()]} {today.day(0).date()}-{today.day(6).date()},{' '}
            {today.year()}
          </p>
        </div>
        <div className="grow">
          <div className="float-right">
            <button
              onClick={() => toggleCalenderView(1)}
              className={`rounded text-periwinkle border px-2 border-periwinkle hover:bg-periwinkle hover:text-white ${
                isCalendarView && 'bg-periwinkle text-white'
              }`}
            >
              {t.calendar}
            </button>
            <button
              onClick={() => toggleCalenderView(0)}
              className={`rounded text-periwinkle border px-2 border-periwinkle hover:bg-periwinkle hover:text-white ml-1 ${
                !isCalendarView && 'bg-periwinkle text-white'
              }`}
            >
              {t.list}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {generateWeek(today).map(({ date, isToday }, index) => {
          const eventsForDay = events.filter(
            (e) =>
              dayjs(e.startDate).format('YYYY-MM-D') ===
              date.format('YYYY-MM-D')
          )
          return (
            <div key={index} className={``}>
              <div
                className={`flex justify-between items-center font-semibold text-periwinkle bg-periwinkle/10 border border-periwinkle -my-px px-2 py-1`}
              >
                <p>{DAYS[dayjs(date).day()]}</p>
                <p className="text-sm ">{dayjs(date).format('MMMM DD,YYYY')}</p>
              </div>
              <div
                className={`h-min border border-periwinkle ${
                  isToday ? 'bg-periwinkle/10' : ''
                }`}
              >
                <div className="flex flex-col items-start px-1 my-2">
                  {eventsForDay.length > 0 ? (
                    eventsForDay.map((e, index) => (
                      <CalendarListEvent key={index} event={e} />
                    ))
                  ) : (
                    <p className="text-periwinkle py-2">{t.noEvents}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
