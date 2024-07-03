import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct, i18n } from '@shopgate/engage/core';
import { css } from 'glamor';
import I18n from '@shopgate/pwa-common/components/I18n/';
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
            <th className={styles.th}>
              <I18n.Text string="base-price-calculation.quantity" />
            </th>
            <th className={styles.th}>
              <I18n.Text string="base-price-calculation.unit_price" />
            </th>
            <th className={styles.th}>
              <I18n.Text string="base-price-calculation.base_price" />
            </th>
          </tr>
        </thead>
        <tbody>
          {tierPrices.map((tier, index) => (
            <tr className={styles.tr} key={tier.from}>
              <td className={styles.td}>{index === 0 ? `bis ${tier.to}` : `ab ${tier.from}`}</td>
              <td className={styles.td}>{`${tier.unitPrice} ${i18n.text('base-price-calculation.currency')}`}</td>
              <td className={styles.td}>{`${tier.basePrice} ${i18n.text('base-price-calculation.currency')} / ${tier.baseUnit}`}</td>
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
