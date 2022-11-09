import PropTypes from 'prop-types'
import { fetchContent } from '../lib/cms'
import { useState } from 'react'
import DottedLine from '../components/DottedLine'
import Calendar from '../components/Calendar'
import CalendarList from '../components/CalendarList'

import enEvents from '../locales/events/en'
import frEvents from '../locales/events/fr'

import eventsFromFile from '../public/events'

export default function Events({ locale, events }) {
  const [isCalendarView, setCalendarView] = useState(1)
  const t = locale === 'en' ? enEvents : frEvents

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center">{t.title}</h1>
      <DottedLine />
      {isCalendarView ? (
        <Calendar
          isCalendarView={isCalendarView}
          toggleCalenderView={setCalendarView}
          events={events}
          t={t}
        />
      ) : (
        <CalendarList
          isCalendarView={isCalendarView}
          toggleCalenderView={setCalendarView}
          events={events}
          t={t}
        />
      )}
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const content = await fetchContent()

  /* istanbul ignore next */
  const langToggleLink = locale === 'en' ? '/fr/events' : '/events'

  /* Place-holder Meta Data Props */
  const meta = {
    data_en: {
      title: 'Digital Dojo - Events',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique - Événements',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  return {
    props: {
      locale,
      langToggleLink,
      content,
      meta,
      events: eventsFromFile.events,
    },
  }
}

Events.propTypes = {
  /**
   * current locale in the address
   */
  locale: PropTypes.string,

  /*
   * Meta Tags
   */
  meta: PropTypes.object,
}
