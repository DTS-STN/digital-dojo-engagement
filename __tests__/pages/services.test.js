import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Services from '../../pages/services/index'
import { getStaticProps } from '../../pages/services/index'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}))

describe('Services index page', () => {
  it('renders page', () => {
    render(<Services locale="en" />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('mock navigates to the consultations pages', () => {
    const mockRouter = {
      push: jest.fn(),
    }
    useRouter.mockReturnValue(mockRouter)
    render(<Services locale="en" />)
    const btn = screen.getAllByRole('button', { name: 'Learn more' })[0]
    fireEvent.click(btn)
    expect(mockRouter.push).toHaveBeenCalledWith('/services/consultations')
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })
    expect(props).toEqual({
      props: {
        langToggleLink: '/fr/services',
        locale: 'en',
        meta: {
          data_en: {
            title: 'Digital Dojo - Our Services',
            desc: 'English',
            author: '',
            keywords: '',
          },
          data_fr: {
            title: 'Dojo Numérique - Nos Services',
            desc: 'Français',
            author: '',
            keywords: '',
          },
        },
      },
    })
  })
})
