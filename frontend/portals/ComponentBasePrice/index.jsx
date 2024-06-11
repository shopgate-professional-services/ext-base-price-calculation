import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct } from '@shopgate/engage/core';
import { css } from 'glamor';
import connect from './connector';
import { tierPricesTableHeadlineColors } from '../../config';

const styles = {
  table: css({
    borderCollapse: 'separate',
  }),
  th: css({
    ...tierPricesTableHeadlineColors,
  }),
  td: css({
    padding: 5,
  }),
  tr: css({
    background: '#fff',
    ':nth-child(even)': {
      background: '#f5f5f5 !important',
    },
  }),
};

/**
 * The BasePrice component
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const BasePrice = ({ tierPrices }) => (
  <div>
    {tierPrices ?
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Menge</th>
            <th className={styles.th}>Stückpreis</th>
            <th className={styles.th}>Grundpreis</th>
          </tr>
        </thead>
        <tbody>
          {tierPrices.map((tier, index) => (
            <tr className={styles.tr} key={tier.from}>
              <td className={styles.td}>{index === 0 ? `bis ${tier.to}` : `ab ${tier.from}`}</td>
              <td className={styles.td}>{`${tier.unitPrice} €`}</td>
              <td className={styles.td}>{`${tier.basePrice} € / ${tier.baseUnit}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      :
      null
    }
  </div>
);

BasePrice.propTypes = {
  tierPrices: PropTypes.arrayOf(PropTypes.shape()),
};

BasePrice.defaultProps = {
  tierPrices: null,
};

export default withCurrentProduct(connect(BasePrice));
