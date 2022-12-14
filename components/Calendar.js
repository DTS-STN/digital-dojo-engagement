import PropTypes from 'prop-types'
import { useState } from 'react'
import dayjs from 'dayjs'
import CalendarEvent from './CalendarEvent'
import { generateMonth, DAYS, MONTHS } from '../lib/calendarUtils'

export default function Calendar({
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
              setToday(today.subtract(1, 'month'))
            }}
            className="uppercase rounded text-darkPeriwinkle border px-2 border-darkPeriwinkle hover:bg-darkPeriwinkle hover:text-white "
          >
            {t.prev}
          </button>
          <button
            id="nextMonth"
            onClick={() => {
              setToday(today.add(1, 'month'))
            }}
            className="uppercase rounded text-darkPeriwinkle border px-2 border-darkPeriwinkle hover:bg-darkPeriwinkle hover:text-white ml-1"
          >
            {t.next}
          </button>
        </div>
        <div>
          <p className="text-darkPeriwinkle text-xl font-bold mx-3">
            {today.year()} {MONTHS[today.month()]}
          </p>
        </div>
        <div className="grow">
          <div className="float-right">
            <button
              onClick={() => toggleCalenderView(1)}
              className={`rounded text-white border px-2 border-darkPeriwinkle hover:bg-darkPeriwinkle hover:text-white ${
                isCalendarView && 'bg-periwinkle text-white'
              }`}
            >
              {t.calendar}
            </button>
            <button
              onClick={() => toggleCalenderView(0)}
              className={`rounded text-darkPeriwinkle border px-2 border-darkPeriwinkle hover:bg-darkPeriwinkle hover:text-white ml-1 ${
                !isCalendarView && 'bg-periwinkle text-white'
              }`}
            >
              {t.list}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7">
        {DAYS.map((day, index) => {
          return (
            <p
              className="-mt-px -ml-px border border-darkPeriwinkle text-left text-darkPeriwinkle px-1 bg-periwinkle/10"
              key={index}
            >
              {day.substring(0, 3)}
            </p>
          )
        })}
      </div>
      <div className="grid grid-cols-7">
        {generateMonth(today.month(), today.year()).map(
          ({ date, isInCurrentMonth, isToday }, index) => {
            const eventsForDay = events.filter(
              (e) =>
                dayjs(e.startDate).format('YYYY-MM-DD') ===
                date.format('YYYY-MM-DD')
            )
            return (
              <div
                key={index}
                className={`-mt-px -ml-px border border-darkPeriwinkle aspect-[4/5] ${
                  !isInCurrentMonth ? 'invisible' : ''
                }`}
              >
                <div
                  className={`h-full border-2 border-white hover:border-darkPeriwinkle ${
                    isToday ? 'border-darkPeriwinkle/10' : ''
                  }`}
                >
                  <div
                    className={`h-full text-darkPeriwinkle ${
                      isToday ? 'bg-periwinkle/10' : ''
                    }`}
                  >
                    <p className="px-1 text-right">{date.date()}</p>
                    <div className="flex flex-col">
                      {eventsForDay.length > 0 &&
                        eventsForDay.map((e, index) => (
                          <CalendarEvent
                            key={index}
                            event={e}
                            hasMultipleEvents={eventsForDay.length > 1}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
