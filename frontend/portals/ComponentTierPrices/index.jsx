import { withCurrentProduct } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The TierPrices component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const TierPrices = ({ children, hasTierPrices }) => {
  if (hasTierPrices) {
    return null;
  }

  return children;
};

export default withCurrentProduct(connect(TierPrices));
