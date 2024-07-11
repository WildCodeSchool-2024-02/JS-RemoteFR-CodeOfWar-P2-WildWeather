import PropTypes from "prop-types";
import "../style/backgroundcloud.css";

function Cloud({ style = {} }) {
  return (
    <svg
      className="cloud"
      style={style}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M51.5,30.1c-0.4-0.1-0.9-0.1-1.4-0.1c-0.3,0-0.6,0-0.9,0.1c-0.3-2.6-1.2-4.9-2.5-6.9c0.3-0.5,0.5-1,0.5-1.6
          c0-1.8-1.5-3.3-3.3-3.3c-0.6,0-1.2,0.2-1.7,0.5c-1.5-1.4-3.4-2.3-5.6-2.3c-1.8,0-3.5,0.6-4.9,1.6c-1.3-0.9-2.8-1.4-4.4-1.4
          c-3.9,0-7.1,2.9-7.7,6.6C11.6,23.7,8,28,8,33.1c0,5.5,4.5,10,10,10h32c5.5,0,10-4.5,10-10C60,34.7,56.2,30.6,51.5,30.1z"
        />
      </g>
    </svg>
  );
}

Cloud.propTypes = {
  style: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    animationDuration: PropTypes.string,
  }),
};

Cloud.defaultProps = {
  style: {},
};

export default Cloud;
