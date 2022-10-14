import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Engagement from '../../pages/engagement'
import { getStaticProps } from '../../pages/engagement'

describe('engagement page', () => {
  it('renders page', () => {
    render(<Engagement locale="en" />)
    expect(screen.getByText('Start a Team Engagement')).toBeInTheDocument()
  })

  it('writes to form', () => {
    render(<Engagement locale="en" />)
    const fname = screen.getByLabelText('First Name *')
    fireEvent.change(fname, { target: { value: 'test first name' } })
    expect(fname.value).toBe('test first name')
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })
    expect(props).toEqual({
      props: {
        langToggleLink: '/fr/engagement',
        locale: 'en',
        meta: {
          data_en: {
            title: 'Digital Dojo - Team Engagement',
            desc: 'English',
            author: '',
            keywords: '',
          },
          data_fr: {
            title: "Dojo Numérique - Mobilisation d'équipe",
            desc: 'Français',
            author: '',
            keywords: '',
          },
        },
      },
    })
  })
})
