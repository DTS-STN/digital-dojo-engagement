import { useState } from 'react'
import Router from 'next/router'

function BeltAssessment({ t }) {
  const [state, setState] = useState({
    'continuous-planning': 'na',
    'continuous-collaboration': 'na',
    'continuous-improvement': 'na',
    'continuous-quality': 'na',
    'continuous-integration': 'na',
    'continuous-delivery': 'na',
    'continuous-operations': 'na',
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

    // we can use Router instead of useRouter to keep the route 'clean'
    // (not add query parameter when navigating) and push state as well
    Router.push(
      {
        pathname: '/belt-assessment/belt-results',
        query: { state: JSON.stringify(state) },
      },
      '/belt-assessment/belt-results'
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl text-periwinkle bg-blue-50 px-5 py-1 mt-5">
          {t.agile}
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
            {t.continuousPlanning}
          </legend>
          <p
            id="continuous-planning-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousPlanningLong}
          </p>
          <p id="continuous-planning-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-planning"
              id="continuous-planning-white"
              value="white"
            />
            <label htmlFor="continuous-planning-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousPlanningWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousPlanningYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousPlanningGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousPlanningBlack}
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
              <span className="font-bold mr-2">{t.na}</span>
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
            {t.continuousCollaboration}
          </legend>
          <p
            id="continuous-collaboration-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousCollaborationLong}
          </p>
          <p id="continuous-collaboration-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-collaboration"
              id="continuous-collaboration-white"
              value="white"
            />
            <label htmlFor="continuous-collaboration-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousCollaborationWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousCollaborationYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousCollaborationGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousCollaborationBlack}
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
              <span className="font-bold mr-2">{t.na}</span>
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
            {t.continuousImprovement}
          </legend>
          <p
            id="continuous-improvement-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousImprovementLong}
          </p>
          <p id="continuous-improvement-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-improvement"
              id="continuous-improvement-white"
              value="white"
            />
            <label htmlFor="continuous-improvement-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousImprovementWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousImprovementYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousImprovementGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousImprovementBlack}
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
              <span className="font-bold">{t.na}</span>
            </label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-yellow-50 px-5 py-1 mt-5">
          {t.agileDevops}
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
            {t.continuousQuality}
          </legend>
          <p id="continuous-quality-long" className="text-periwinkle font-bold">
            {t.continuousQualityLong}
          </p>
          <p id="continuous-quality-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-quality"
              id="continuous-quality-white"
              value="white"
            />
            <label htmlFor="continuous-quality-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousQualityWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousQualityYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousQualityGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousQualityBlack}
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
              <span className="font-bold">{t.na}</span>
            </label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-green-50 px-5 py-1 mt-5">
          {t.devops}
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
            {t.continuousIntegration}
          </legend>
          <p
            id="continuous-integration-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousIntegrationLong}
          </p>
          <p id="continuous-integration-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-integration"
              id="continuous-integration-white"
              value="white"
            />
            <label htmlFor="continuous-integration-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousIntegrationWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousIntegrationYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousIntegrationGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousIntegrationBlack}
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
              <span className="font-bold">{t.na}</span>
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
            {t.continuousDelivery}
          </legend>
          <p
            id="continuous-delivery-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousDeliveryLong}
          </p>
          <p id="continuous-delivery-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-delivery"
              id="continuous-delivery-white"
              value="white"
            />
            <label htmlFor="continuous-delivery-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousDeliveryWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousDeliveryYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousDeliveryGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousDeliveryBlack}
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
              <span className="font-bold">{t.na}</span>
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
            {t.continuousOperations}
          </legend>
          <p
            id="continuous-operations-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousOperationsLong}
          </p>
          <p id="continuous-operations-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-operations"
              id="continuous-operations-white"
              value="white"
            />
            <label htmlFor="continuous-operations-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousOperationsWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousOperationsYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousOperationsGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousOperationsBlack}
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
              <span className="font-bold">{t.na}</span>
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
            {t.continuousSecurity}
          </legend>
          <p
            id="continuous-security-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousSecurityLong}
          </p>
          <p id="continuous-security-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-security"
              id="continuous-security-white"
              value="white"
            />
            <label htmlFor="continuous-security-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousSecurityWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousSecurityYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousSecurityGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousSecurityBlack}
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
              <span className="font-bold">{t.na}</span>
            </label>
          </div>
        </fieldset>

        <h2 className="font-bold text-2xl text-periwinkle bg-rose-50 px-5 py-1 mt-5">
          {t.designThinking}
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
            {t.continuousUserFeedback}
          </legend>
          <p
            id="continuous-user-feedback-long"
            className="text-periwinkle font-bold"
          >
            {t.continuousUserFeedbackLong}
          </p>
          <p id="continuous-user-feedback-instructions" className="font-bold">
            {t.select}
          </p>
          <div className="flex gap-5 border-b-2 pb-3 text-sm">
            <input
              type="radio"
              name="continuous-user-feedback"
              id="continuous-user-feedback-white"
              value="white"
            />
            <label htmlFor="continuous-user-feedback-white">
              <span className="font-bold mr-2">{t.whiteBelt}</span>
              {t.continuousUserFeedbackWhite}
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
              <span className="font-bold mr-2">{t.yellowBelt}</span>
              {t.continuousUserFeedbackYellow}
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
              <span className="font-bold mr-2">{t.greenBelt}</span>
              {t.continuousUserFeedbackGreen}
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
              <span className="font-bold mr-2">{t.blackBelt}</span>
              {t.continuousUserFeedbackBlack}
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
              <span className="font-bold">{t.na}</span>
            </label>
          </div>
        </fieldset>
        <button className="bg-gray-600 text-white rounded px-3 hover:bg-gray-800 self-end mt-5">
          {t.getResults}
        </button>
      </form>
    </>
  )
}

export default BeltAssessment
