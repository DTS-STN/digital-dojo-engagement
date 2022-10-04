import { useState } from 'react'

function BeltAssessment() {
  const [state, setState] = useState({
    'continuous-collaboration': 'na',
    'continuous-delivery': 'na',
    'continuous-improvement': 'na',
    'continuous-integration': 'na',
    'continuous-operations': 'na',
    'continuous-planning': 'na',
    'continuous-quality': 'na',
    'continuous-security': 'na',
    'continuous-user-feedback': 'na',
  })

  function handleChange(e) {
    let key = e.target.name
    let value = e.target.value
    setState((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(state)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl text-periwinkle bg-blue-50 px-5 py-1">
          Agile
        </h2>
        <fieldset
          id="continuous-planning"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-planning-legend continuous-planning-long"
        >
          <legend
            id="continuous-planning-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Planning
          </legend>
          <p id="continuous-planning-long">
            We create short, flexible plans that can be adapted to changing
            circumstances and shifting priorities, adjusting to unexpected
            delays. The continuous planning process involves monitoring goals,
            metrics, and milestones for existing priorities; identifying,
            developing, and advancing new strategic priorities; and ensuring a
            culture of self-evaluation, innovation, agility, and adaptability.
          </p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-white"
              value="white"
            />
            <label htmlFor="continuous-planning-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-planning-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-green"
              value="green"
            />
            <label htmlFor="continuous-planning-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-black"
              value="black"
            />
            <label htmlFor="continuous-planning-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-na"
              value="na"
            />
            <label htmlFor="continuous-planning-na">na</label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-collaboration"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-collaboration-legend continuous-collaboration-long"
        >
          <legend
            id="continuous-collaboration-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Collaboration
          </legend>
          <p id="continuous-collaboration-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-white"
              value="white"
            />
            <label htmlFor="continuous-collaboration-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-collaboration-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-green"
              value="green"
            />
            <label htmlFor="continuous-collaboration-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-black"
              value="black"
            />
            <label htmlFor="continuous-collaboration-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-na"
              value="na"
            />
            <label htmlFor="continuous-collaboration-na">na</label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-improvement"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-improvement-legend continuous-improvement-long"
        >
          <legend
            id="continuous-improvement-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Improvement
          </legend>
          <p id="continuous-improvement-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-white"
              value="white"
            />
            <label htmlFor="continuous-improvement-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-improvement-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-green"
              value="green"
            />
            <label htmlFor="continuous-improvement-green">green</label>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-black"
              value="black"
            />
            <label htmlFor="continuous-improvement-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-na"
              value="na"
            />
            <label htmlFor="continuous-improvement-na">na</label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-yellow-50 px-5 py-1">
          Agile/DevOps
        </h2>
        <fieldset
          id="continuous-quality"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-quality-legend continuous-quality-long"
        >
          <legend
            id="continuous-quality-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Quality
          </legend>
          <p id="continuous-quality-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-white"
              value="white"
            />
            <label htmlFor="continuous-quality-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-quality-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-green"
              value="green"
            />
            <label htmlFor="continuous-quality-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-black"
              value="black"
            />
            <label htmlFor="continuous-quality-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-na"
              value="na"
            />
            <label htmlFor="continuous-quality-na">na</label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-green-50 px-5 py-1">
          DevOps
        </h2>
        <fieldset
          id="continuous-integration"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-integration-legend continuous-integration-long"
        >
          <legend
            id="continuous-integration-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Integration
          </legend>
          <p id="continuous-integration-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-white"
              value="white"
            />
            <label htmlFor="continuous-integration-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-integration-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-green"
              value="green"
            />
            <label htmlFor="continuous-integration-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-black"
              value="black"
            />
            <label htmlFor="continuous-integration-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-na"
              value="na"
            />
            <label htmlFor="continuous-integration-na">na</label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-delivery"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-delivery-legend continuous-delivery-long"
        >
          <legend
            id="continuous-delivery-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Delivery
          </legend>
          <p id="continuous-delivery-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-white"
              value="white"
            />
            <label htmlFor="continuous-delivery-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-delivery-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-green"
              value="green"
            />
            <label htmlFor="continuous-delivery-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-black"
              value="black"
            />
            <label htmlFor="continuous-delivery-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-na"
              value="na"
            />
            <label htmlFor="continuous-delivery-na">na</label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-operations"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-operations-legend continuous-operations-long"
        >
          <legend
            id="continuous-operations-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Operations
          </legend>
          <p id="continuous-operations-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-white"
              value="white"
            />
            <label htmlFor="continuous-operations-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-operations-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-green"
              value="green"
            />
            <label htmlFor="continuous-operations-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-black"
              value="black"
            />
            <label htmlFor="continuous-operations-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-na"
              value="na"
            />
            <label htmlFor="continuous-operations-na">na</label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-security"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-security-legend continuous-security-long"
        >
          <legend
            id="continuous-security-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous Security
          </legend>
          <p id="continuous-security-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-white"
              value="white"
            />
            <label htmlFor="continuous-security-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-security-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-green"
              value="green"
            />
            <label htmlFor="continuous-security-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-black"
              value="black"
            />
            <label htmlFor="continuous-security-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-na"
              value="na"
            />
            <label htmlFor="continuous-security-na">na</label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-rose-50 px-5 py-1">
          Design Thinking
        </h2>
        <fieldset
          id="continuous-user-feedback"
          onChange={handleChange}
          className="flex flex-col border-2"
          aria-labelledby="continuous-user-feedback-legend continuous-user-feedback-long"
        >
          <legend
            id="continuous-user-feedback-legend"
            className="text-lg font-semibold text-periwinkle"
          >
            Continuous User Feedback
          </legend>
          <p id="continuous-user-feedback-long">placeholder</p>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-white"
              value="white"
            />
            <label htmlFor="continuous-user-feedback-white">white</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-user-feedback-yellow">yellow</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-green"
              value="green"
            />
            <label htmlFor="continuous-user-feedback-green">green</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-black"
              value="black"
            />
            <label htmlFor="continuous-user-feedback-black">black</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-na"
              value="na"
            />
            <label htmlFor="continuous-user-feedback-na">na</label>
          </div>
        </fieldset>
        <button className="bg-gray-600 text-white rounded px-3 hover:bg-gray-800 self-end">
          Get Results
        </button>
      </form>
    </>
  )
}

export default BeltAssessment
