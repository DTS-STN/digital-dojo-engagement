/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../pages/_app'
import Index from '../../pages/index'

import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('index page', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  const meta = {
    data_en: {
      title: 'Digital Dojo',
      desc: 'English',
      author: '',
      keywords: '',
    },
    data_fr: {
      title: 'Dojo Numérique',
      desc: 'Français',
      author: '',
      keywords: '',
    },
  }

  const component = Index
  const pageProps = {
    locale: 'en',
    meta: meta,
  }

  it('should render the page', () => {
    render(<App Component={component} pageProps={pageProps} />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
