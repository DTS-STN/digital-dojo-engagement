import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Events from '../../pages/events'
import { getStaticProps } from '../../pages/events'
import events from '../../public/events'

describe('Events Page', () => {
  it('renders page', () => {
    render(<Events locale="en" events={events.events} />)
    expect(screen.getByText(/Dojo Events Calendar/)).toBeInTheDocument()
  })

  it('render current year', () => {
    let y = new Date().getFullYear()
    render(<Events locale="en" events={events.events} />)
    expect(screen.getByText(new RegExp(y))).toBeInTheDocument()
  })

  it('click list button and change calendar view', async () => {
    render(<Events locale="en" events={events.events} />)
    let listBtn = screen.getByText(/List/)
    await fireEvent.click(listBtn)
    expect(screen.getByText(/List/).className).toContain('bg-periwinkle')
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en', events: events.events })
    expect(props).toEqual({
      props: {
        langToggleLink: '/fr/events',
        locale: 'en',
        events: events.events,
        meta: {
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
        },
      },
    })
  })
})
