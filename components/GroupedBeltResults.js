import BeltResult from './BeltResult'
import mostCommon from '../lib/mostCommon'

function GroupedBeltResults({ t, topic, keys, state }) {
  const mostCommonBelt = mostCommon(keys.map((k) => state[k]))

  return (
    <div className="mb-10">
      <dl className="flex gap-2 text-xl mb-5 text-periwinkle tracking-tighter">
        <dt>{topic} Overall Belt Score:</dt>
        <dd className="font-bold">
          {mostCommonBelt === 'na'
            ? 'Not Applicable'
            : `${mostCommonBelt.replace(/^./g, (e) => e.toUpperCase())} Belt`}
        </dd>
      </dl>
      {keys.map((k) => (
        <BeltResult key={k} t={t} id={k} result={state[k]} />
      ))}
    </div>
  )
}

export default GroupedBeltResults
