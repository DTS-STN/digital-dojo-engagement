/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/home'
import { getStaticProps } from '../../pages/home'

import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

//
jest.mock('../../lib/cms', () => ({
  fetchContent: () => {
    return {}
  },
}))

describe('Home page', () => {
  const content = {
    header: 'header',
    paragraph: 'paragraph',
  }

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  it('should render the page', () => {
    render(<Home locale="en" content={content} />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })

    expect(props).toEqual({
      props: {
        content: {},
        langToggleLink: '/fr/home',
        locale: 'en',
        meta: {
          data_en: {
            title: 'Digital Dojo - Homez',
            desc: 'English',
            author: '',
            keywords: '',
          },
          data_fr: {
            title: 'Dojo Numérique - Accueil',
            desc: 'Français',
            author: '',
            keywords: '',
          },
        },
      },
    })
  })
})
