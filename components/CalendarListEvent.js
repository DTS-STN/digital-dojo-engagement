import dayjs from 'dayjs'

export default function CalendarListEvent({ event }) {
  const shortenText = (text) => {
    if (text.length > 5) return text.substring(0, 20) + '...'
    return text
  }
  return (
    <div className="cursor-pointer flex flex-row w-full text-periwinkle py-2">
      <p className="mr-5">{dayjs(event.date).format('HH:mm')}</p>
      <p className="grow underline">{event.title}</p>
    </div>
  )
}
