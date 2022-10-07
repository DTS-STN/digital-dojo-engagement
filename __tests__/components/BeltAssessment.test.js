import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BeltAssessment from '../../components/BeltAssessment'
import en from '../../locales/belt-assessment/belt-assessment/en'

expect.extend(toHaveNoViolations)

describe('BeltAssessment', () => {
  it('renders form', () => {
    render(<BeltAssessment t={en} />)
    const submit = screen.getByRole('button', { name: 'Get Results' })
    expect(submit).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<BeltAssessment t={en} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
