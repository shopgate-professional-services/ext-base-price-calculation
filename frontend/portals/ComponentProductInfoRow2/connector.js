import { connect } from 'react-redux';
import { hasTierPrice } from '../../selectors';

/**
 * @param {Object} state state
 * @param {Object} props component props
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  showTierPrices: !hasTierPrice(state, props),
});

export default connect(mapStateToProps);
