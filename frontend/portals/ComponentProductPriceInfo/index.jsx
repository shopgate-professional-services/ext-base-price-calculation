import { withCurrentProduct } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The BasePrice component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const ProductPriceInfo = ({ children, hasTierPrices }) => {
  if (hasTierPrices) {
    return null;
  }

  return children;
};

export default withCurrentProduct(connect(ProductPriceInfo));
