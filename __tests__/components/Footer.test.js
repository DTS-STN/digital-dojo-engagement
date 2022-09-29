import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../components/Footer'
import en from '../../locales/en'

expect.extend(toHaveNoViolations)

describe('Footer', () => {
  it('has no a11y violations', async () => {
    const { container } = render(
      <Footer
        footerLogoAltText="testAltText"
        footerLogoImage="testImage"
        t={en}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
