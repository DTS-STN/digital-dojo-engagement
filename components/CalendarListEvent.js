export default function CalendarListEvent({ event }) {
  const shortenText = (text) => {
    if (text.length > 5) return text.substring(0, 20) + '...'
    return text
  }
  return (
    <div className="cursor-pointer">
      <p className="text-xs">{event.title}</p>
    </div>
  )
}
