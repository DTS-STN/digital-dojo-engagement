import PropTypes from 'prop-types'
import DateModified from '../components/DateModified'

/**
 * footer element for all pages
 */

export default function Footer(props) {
  return (
    <footer>
      <h2 className="sr-only">Site Footer</h2>
      <div className="container mx-auto px-6 mt-5 text-sm">
        {props.t.reportProblem}
      </div>
      <DateModified text={props.t.dateModified} />
      <div className="flex justify-end items-center px-10 w-full h-[4rem] bg-periwinkle">
        <img
          src="/footer-logo.svg"
          alt={props.t.footerCanadaCaAltText}
          className="w-24"
        />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  /**
   * Screenreader section indicator
   */
  footerNav1: PropTypes.string,

  /**
   * Screenreader section indicator
   */
  footerNav2: PropTypes.string,
  /**
   * array of objects containing the link text and link
   */
  footerBoxLinks: PropTypes.arrayOf(
    PropTypes.shape({
      footerBoxlink: PropTypes.string.isRequired,
      footerBoxLinkText: PropTypes.string.isRequired,
    })
  ),
  /**
   * array of objects containing the link text and link
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),
}
