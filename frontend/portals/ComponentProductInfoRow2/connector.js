import { connect } from 'react-redux';
import { getHasTierPrice, getHasStrikePrice } from '../../selectors';

/**
 * @param {Object} state state
 * @param {Object} props component props
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  hasTierPrices: getHasTierPrice(state, props),
  hasStrikePrice: getHasStrikePrice(state, props),
});

export default connect(mapStateToProps);
