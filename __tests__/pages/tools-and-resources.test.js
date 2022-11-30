import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ToolsAndResources from '../../pages/tools-and-resources'
import { getStaticProps } from '../../pages/tools-and-resources'

beforeEach(() => render(<ToolsAndResources locale="en" />))

describe('tools and resources page', () => {
  it('renders page', () => {
    expect(screen.getByText('Tools and Resources')).toBeInTheDocument()
  })

  it('opens details', () => {
    const F = screen.getByText(/^F$/)
    fireEvent.click(F)
    const failFast = screen.getByText('Fail-Fast')
    expect(failFast).toBeInTheDocument()
    fireEvent.click(failFast)
    expect(failFast.parentElement.getAttributeNames().includes('open')).toBe(
      true
    )
  })

  it('Test getStaticProps', async () => {
    const props = await getStaticProps({ locale: 'en' })
    expect(props).toEqual({
      props: {
        langToggleLink: '/fr/tools-and-resources',
        locale: 'en',
        meta: {
          data_en: {
            title: 'Digital Dojo - Tools and Resources',
            desc: 'English',
            author: '',
            keywords: '',
          },
          data_fr: {
            title: 'Dojo Numérique - Outils et Ressources',
            desc: 'Français',
            author: '',
            keywords: '',
          },
        },
      },
    })
  })
})
