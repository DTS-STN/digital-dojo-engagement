import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Coaches from '../../pages/about/coaches'
import { getStaticProps } from '../../pages/about/coaches'
import fakeUsers from '../../lib/fakeUsers'

jest.mock('../../lib/fakeUsers', () => {
  return {
    __esModule: true,
    default: jest.fn(() => []),
  }
})

describe('Coaches page', () => {
  it('renders page', () => {
    render(<Coaches fakeCoaches={[]} />)
    expect(screen.getByText(/Our Team/)).toBeInTheDocument()
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })

    expect(props).toEqual({
      props: {
        langToggleLink: '/fr/about/coaches',
        locale: 'en',
        fakeCoaches: [],
        meta: {
          data_en: {
            desc: 'English',
            title: 'Digital Dojo - About us',
            author: '',
            keywords: '',
          },
          data_fr: {
            title: 'Dojo Numérique - À propos de nous',
            desc: 'Français',
            author: '',
            keywords: '',
          },
        },
      },
    })
  })
})
