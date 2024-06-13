import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct } from '@shopgate/engage/core';
import connect from './connector';

const styles = {
  price: {
    marginBottom: 10,
  },
};

/**
 * The BasePrice component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const ProductInfoRow2 = ({ children, hasTierPrices, hasStrikePrice }) => {
  if (hasTierPrices && !hasStrikePrice) {
    return null;
  }

  return <div style={styles.price}>{children}</div>;
};

ProductInfoRow2.propTypes = {
  children: PropTypes.node,
  hasStrikePrice: PropTypes.bool,
  hasTierPrices: PropTypes.bool,
};

ProductInfoRow2.defaultProps = {
  children: null,
  hasStrikePrice: false,
  hasTierPrices: false,
};

export default withCurrentProduct(connect(ProductInfoRow2));
