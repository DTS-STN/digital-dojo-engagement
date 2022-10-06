import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import BeltAssessment from '../../components/BeltAssessment'

expect.extend(toHaveNoViolations)

describe('BeltAssessment', () => {
  it('renders form', () => {
    render(<BeltAssessment />)
    const submit = screen.getByText('Get Results')
    expect(submit).toBeInTheDocument()
  })

  it('has no a11y violations', async () => {
    const { container } = render(<BeltAssessment />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
