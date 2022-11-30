import dayjs from 'dayjs'

export const generateMonth = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const today = dayjs()
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month')
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month')

  const dates = []

  // create prefix dates
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    dates.push({ date: firstDateOfMonth.day(i), isInCurrentMonth: false })
  }

  // generate dates of this month
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    dates.push({
      date: firstDateOfMonth.date(i),
      isInCurrentMonth: true,
      isToday: firstDateOfMonth.date(i).isSame(today, 'date'),
    })
  }

  //generate sufix dates
  const remainder = 42 - dates.length
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remainder;
    i++
  ) {
    dates.push({ date: lastDateOfMonth.day(i), isInCurrentMonth: false })
  }

  return dates
}

export const generateWeek = (day = dayjs().date()) => {
  const dates = []
  const today = dayjs()

  for (let i = 0; i <= 6; i++) {
    dates.push({
      date: day.day(i),
      isToday: day.day(i).isSame(today, 'date'),
    })
  }
  return dates
}

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const DAYS = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
]
