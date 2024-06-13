import { connect } from 'react-redux';
import { getHasTierPrice } from '../../selectors';

/**
 * @param {Object} state state
 * @param {Object} props component props
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  hasTierPrices: getHasTierPrice(state, props),
});

export default connect(mapStateToProps);
