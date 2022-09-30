import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Navbar from '../../components/Navbar'
import en from '../../locales/en'
import fr from '../../locales/fr'

expect.extend(toHaveNoViolations)

describe('Navbar', () => {
  it('renders Navbar in English', () => {
    render(<Navbar t={en} />)
    const home = screen.getByText('Home')
    expect(home).toBeInTheDocument()
  })

  it('renders Navbar in French', () => {
    render(<Navbar t={fr} />)
    const home = screen.getByText('Accueil')
    expect(home).toBeInTheDocument()
  })
  it('has no a11y violations', async () => {
    const { container } = render(<Navbar t={en} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
