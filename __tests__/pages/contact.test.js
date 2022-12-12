import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '../../pages/contact'
import { getStaticProps } from '../../pages/contact'

describe('Contact page', () => {
  it('renders page', () => {
    render(<Contact locale="en" />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('', async () => {
    render(<Contact locale="en" />)
    let firstName = screen.getByLabelText(/First Name/)
    fireEvent.change(firstName, { target: { value: 'first name' } })
    expect(firstName.value).toBe('first name')
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })

    expect(props).toEqual({
      props: {
        langToggleLink: '/fr/contact',
        locale: 'en',
        meta: {
          data_en: {
            desc: 'English',
            title: 'Digital Dojo - Contact',
            author: '',
            keywords: '',
          },
          data_fr: {
            title: 'Dojo Numérique - Contactez Nous',
            desc: 'Français',
            author: '',
            keywords: '',
          },
        },
      },
    })
  })
})
