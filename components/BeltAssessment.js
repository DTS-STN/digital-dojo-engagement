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
        <h2 className="font-bold text-2xl text-periwinkle bg-blue-50 px-5 py-1 mt-5">
          Agile
        </h2>
        <fieldset
          id="continuous-planning"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-planning-legend continuous-planning-long continuous-planning-instructions"
        >
          <legend
            id="continuous-planning-legend"
            className="text-lg font-semibold text-indigo-800 mb-2"
          >
            Continuous Planning
          </legend>
          <p
            id="continuous-planning-long"
            className="text-periwinkle font-bold"
          >
            We create short, flexible plans that can be adapted to changing
            circumstances and shifting priorities, adjusting to unexpected
            delays. The continuous planning process involves monitoring goals,
            metrics, and milestones for existing priorities; identifying,
            developing, and advancing new strategic priorities; and ensuring a
            culture of self-evaluation, innovation, agility, and adaptability.
          </p>
          <p id="continuous-planning-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-white"
              value="white"
            />
            <label htmlFor="continuous-planning-white">
              <span className="font-bold">White Belt:</span> Our team does not
              have a clear backlog of work and we don't use a work tracking
              system.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-planning-yellow">
              <span className="font-bold">
                <span className="font-bold">Yellow Belt:</span>
              </span>{' '}
              We have regular meetings to plan, review, refine work, and tasks
              are tracked within a tool.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-green"
              value="green"
            />
            <label htmlFor="continuous-planning-green">
              <span className="font-bold">Green Belt:</span> We have a backlog
              which is prioritized and maintained with set goals, and we work in
              short cycles.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-black"
              value="black"
            />
            <label htmlFor="continuous-planning-black">
              <span className="font-bold">Black Belt:</span> We have a roadmap
              for our service/product, and continually update our plan based on
              feedback received.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-na"
              value="na"
            />
            <label htmlFor="continuous-planning-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-collaboration"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-collaboration-legend continuous-collaboration-long"
        >
          <legend
            id="continuous-collaboration-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous Collaboration
          </legend>
          <p
            id="continuous-collaboration-long"
            className="text-periwinkle font-bold"
          >
            placeholder
          </p>
          <p id="continuous-collaboration-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-white"
              value="white"
            />
            <label htmlFor="continuous-collaboration-white">
              <span className="font-bold">White Belt:</span> Work is assigned
              and we don't always know who is working on what, or if they are
              struggling.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-collaboration-yellow">
              <span className="font-bold">Yellow Belt:</span> We have daily
              stand-ups and our work is visible to other teams and stakeholders.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-green"
              value="green"
            />
            <label htmlFor="continuous-collaboration-green">
              <span className="font-bold">Green Belt:</span> We have documented
              our ways of working as a team and agreed on our use of
              collaboration tools.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-black"
              value="black"
            />
            <label htmlFor="continuous-collaboration-black">
              <span className="font-bold">Black Belt:</span> We self-organize
              through task management and share our knowledge in communities of
              practices.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-na"
              value="na"
            />
            <label htmlFor="continuous-collaboration-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-improvement"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-improvement-legend continuous-improvement-long continuous-improvement-instructions"
        >
          <legend
            id="continuous-improvement-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous Improvement
          </legend>
          <p
            id="continuous-improvement-long"
            className="text-periwinkle font-bold"
          >
            placeholder
          </p>
          <p id="continuous-improvement-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-white"
              value="white"
            />
            <label htmlFor="continuous-improvement-white">
              <span className="font-bold">White Belt:</span> Work is assigned
              and we don't always know who is working on what, or if they are
              struggling.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-improvement-yellow">
              <span className="font-bold">Yellow Belt:</span> We have daily
              stand-ups and our work is visible to other teams and stakeholders.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-green"
              value="green"
            />
            <label htmlFor="continuous-improvement-green">
              <span className="font-bold">Green Belt:</span> We have documented
              our ways of working as a team and agreed on our use of
              collaboration tools.
            </label>
          </div>

          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-black"
              value="black"
            />
            <label htmlFor="continuous-improvement-black">
              <span className="font-bold">Black Belt:</span> We self-organize
              through task management and share our knowledge in communities of
              practices.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-na"
              value="na"
            />
            <label htmlFor="continuous-improvement-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-yellow-50 px-5 py-1 mt-5">
          Agile/DevOps
        </h2>
        <fieldset
          id="continuous-quality"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-quality-legend continuous-quality-long continuous-quality-instructions"
        >
          <legend
            id="continuous-quality-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous Quality
          </legend>
          <p id="continuous-quality-long" className="text-periwinkle font-bold">
            placeholder
          </p>
          <p id="continuous-quality-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-white"
              value="white"
            />
            <label htmlFor="continuous-quality-white">
              <span className="font-bold">White Belt:</span> Our team does not
              have a mechanism to discuss pain points or suggest ways to improve
              how we work.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-quality-yellow">
              <span className="font-bold">Yellow Belt:</span> Some tests are
              automated; we engage with IT security and accessibility experts to
              review our code.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-green"
              value="green"
            />
            <label htmlFor="continuous-quality-green">
              <span className="font-bold">Green Belt:</span> We code and
              maintain test data and measure code coverage.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-black"
              value="black"
            />
            <label htmlFor="continuous-quality-black">
              <span className="font-bold">Black Belt:</span> We continuously
              review our test suite to better find defects and our pipeline
              includes code reviews.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-na"
              value="na"
            />
            <label htmlFor="continuous-quality-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-green-50 px-5 py-1 mt-5">
          DevOps
        </h2>
        <fieldset
          id="continuous-integration"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-integration-legend continuous-integration-long ontinuous-integration-instructions"
        >
          <legend
            id="continuous-integration-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous Integration
          </legend>
          <p
            id="continuous-integration-long"
            className="text-periwinkle font-bold"
          >
            placeholder
          </p>
          <p id="continuous-integration-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-white"
              value="white"
            />
            <label htmlFor="continuous-integration-white">
              <span className="font-bold">White Belt:</span> We have our code
              base on prem in source control.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-integration-yellow">
              <span className="font-bold">Yellow Belt:</span> Our code commits
              result in an automated build of the software with a version
              control strategy.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-green"
              value="green"
            />
            <label htmlFor="continuous-integration-green">
              <span className="font-bold">Green Belt:</span> Our code commits
              result in a series of automated tests and commits are tied to a
              task.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-black"
              value="black"
            />
            <label htmlFor="continuous-integration-black">
              <span className="font-bold">Black Belt:</span> Software is in a
              deploy-able state throughout it's lifecycle, dependencies are
              stable and rarely break code.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-na"
              value="na"
            />
            <label htmlFor="continuous-integration-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-delivery"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-delivery-legend continuous-delivery-long continuous-delivery-instructions"
        >
          <legend
            id="continuous-delivery-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous Delivery
          </legend>
          <p
            id="continuous-delivery-long"
            className="text-periwinkle font-bold"
          >
            placeholder
          </p>
          <p id="continuous-delivery-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-white"
              value="white"
            />
            <label htmlFor="continuous-delivery-white">
              <span className="font-bold">White Belt:</span> Only designated
              team members preform releases, which involve many manual steps.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-delivery-yellow">
              <span className="font-bold">Yellow Belt:</span> Builds/deployments
              are repeatable, auditable and can be done by any member of the
              team.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-green"
              value="green"
            />
            <label htmlFor="continuous-delivery-green">
              <span className="font-bold">Green Belt:</span> Builds/deployments
              are triggered automatically and automated testing is part of our
              pipeline.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-black"
              value="black"
            />
            <label htmlFor="continuous-delivery-black">
              <span className="font-bold">Black Belt:</span> Anyone can deploy
              our product to production or to end-users at anytime on demand.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-na"
              value="na"
            />
            <label htmlFor="continuous-delivery-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-operations"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-operations-legend continuous-operations-long continuous-operations-instructions"
        >
          <legend
            id="continuous-operations-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous Operations
          </legend>
          <p
            id="continuous-operations-long"
            className="text-periwinkle font-bold"
          >
            placeholder
          </p>
          <p id="continuous-operations-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-white"
              value="white"
            />
            <label htmlFor="continuous-operations-white">
              <span className="font-bold">White Belt:</span> Creating new
              environments is a manual process, with limited access to
              production logs and metrics.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-operations-yellow">
              <span className="font-bold">Yellow Belt:</span> There are
              procedures in place to inform us of incidents with access to
              production logs.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-green"
              value="green"
            />
            <label htmlFor="continuous-operations-green">
              <span className="font-bold">Green Belt:</span> We can create and
              manage instances with dashboards to visualize server status.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-black"
              value="black"
            />
            <label htmlFor="continuous-operations-black">
              <span className="font-bold">Black Belt:</span> There are automated
              processes in place to quickly respond to incidents and we can
              dynamically increase or decrease resources.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-na"
              value="na"
            />
            <label htmlFor="continuous-operations-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <fieldset
          id="continuous-security"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-security-legend continuous-security-long continuous-security-instructions"
        >
          <legend
            id="continuous-security-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous Security
          </legend>
          <p
            id="continuous-security-long"
            className="text-periwinkle font-bold"
          >
            placeholder
          </p>
          <p id="continuous-security-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-white"
              value="white"
            />
            <label htmlFor="continuous-security-white">
              <span className="font-bold">White Belt:</span> We have limited
              security testing.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-security-yellow">
              <span className="font-bold">Yellow Belt:</span> We code with
              security in mind and environments reside in a secure store.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-green"
              value="green"
            />
            <label htmlFor="continuous-security-green">
              <span className="font-bold">Green Belt:</span> Security
              requirements are included in the automated testing process for dev
              and production.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-black"
              value="black"
            />
            <label htmlFor="continuous-security-black">
              <span className="font-bold">Black Belt:</span> Our code is scanned
              for security issues and automated processes are in place to
              quickly respond to security issues.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-na"
              value="na"
            />
            <label htmlFor="continuous-security-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-rose-50 px-5 py-1 mt-5">
          Design Thinking
        </h2>
        <fieldset
          id="continuous-user-feedback"
          onChange={handleChange}
          className="flex flex-col gap-5"
          aria-labelledby="continuous-user-feedback-legend continuous-user-feedback-long continuous-user-feedback-instructions"
        >
          <legend
            id="continuous-user-feedback-legend"
            className="text-lg font-semibold text-indigo-800"
          >
            Continuous User Feedback
          </legend>
          <p
            id="continuous-user-feedback-long"
            className="text-periwinkle font-bold"
          >
            placeholder
          </p>
          <p id="continuous-user-feedback-instructions" className="font-bold">
            Select one of the belts below that best describes where your team is
            currently at:
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-white"
              value="white"
            />
            <label htmlFor="continuous-user-feedback-white">
              <span className="font-bold">White Belt:</span> We define our
              requirements up-front and are defined as business rules only.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-yellow"
              value="yellow"
            />
            <label htmlFor="continuous-user-feedback-yellow">
              <span className="font-bold">Yellow Belt:</span> Our team uses
              end-user feedback to establish and validate the requirements of
              our service.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-green"
              value="green"
            />
            <label htmlFor="continuous-user-feedback-green">
              <span className="font-bold">Green Belt:</span> We have define
              personas and document requirements from a user perspective (ex:
              user stories); and actively collect customer feedback.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-black"
              value="black"
            />
            <label htmlFor="continuous-user-feedback-black">
              <span className="font-bold">Black Belt:</span> We have process or
              tools in place to incorporate user feedback, including anonymous
              users into the design of the service.
            </label>
          </div>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-na"
              value="na"
            />
            <label htmlFor="continuous-user-feedback-na">
              <span className="font-bold">Not applicable.</span>
            </label>
          </div>
        </fieldset>
        <button className="bg-gray-600 text-white rounded px-3 hover:bg-gray-800 self-end mt-5">
          Get Results
        </button>
      </form>
    </>
  )
}

export default BeltAssessment
