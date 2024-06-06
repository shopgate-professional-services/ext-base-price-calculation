import { connect } from 'react-redux';
import { getTierPrices } from '../../selectors';

/**
 * @param {Object} state state
 * @param {Object} props component props
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  tierPrices: getTierPrices(state, props),
});

export default connect(mapStateToProps);
