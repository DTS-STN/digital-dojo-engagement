import BeltResult from './BeltResult'
import mostCommon from '../lib/mostCommon'

function GroupedBeltResults({ t, topic, keys, state }) {
  const mostCommonBelt = mostCommon(keys.map((k) => state[k]))

  return (
    <div>
      <h2>
        {topic} Overall Belt Score: {mostCommonBelt}
      </h2>
      {keys.map((k) => (
        <BeltResult key={k} t={t} id={k} result={state[k]} />
      ))}
    </div>
  )
}

export default GroupedBeltResults
