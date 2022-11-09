/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../pages/index'
import { getStaticProps } from '../../pages/index'

import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// 'Mock' call to fetchContent
jest.mock('../../lib/cms', () => ({
  fetchContent: () => {
    return {}
  },
}))

describe('index page', () => {
  /* Place-holder Meta Data Props */
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

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  it('should render the page', () => {
    render(<Index locale="en" meta={meta} />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })

    expect(props).toEqual({
      props: {
        locale: 'en',
        meta: {
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
        },
      },
    })
  })
})
