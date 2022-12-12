import PropTypes from 'prop-types'

export default function DottedLine({ numDots }) {
  return (
    <ul
      role="presentation"
      className={'flex flex-initial flex-row justify-center w-full mb-7'}
    >
      {[...Array(numDots)].map((_, i) => (
        <li
          className="justify-center bg-[#b7c1e1] aspect-square w-[17px] rounded-full mx-3.5"
          key={i}
        />
      ))}
    </ul>
  )
}

DottedLine.propTypes = {
  // numDots - Number of dots to display
  numDots: PropTypes.number,
}

DottedLine.defaultProps = {
  numDots: 8,
}
