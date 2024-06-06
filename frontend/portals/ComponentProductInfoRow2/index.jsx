import { withCurrentProduct } from '@shopgate/engage/core';
import connect from './connector';

/**
 * The BasePrice component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const ProductInfoRow2 = ({ children, showTierPrices }) => {
  if (showTierPrices) {
    return children;
  }

  return null;
};

export default withCurrentProduct(connect(ProductInfoRow2));
