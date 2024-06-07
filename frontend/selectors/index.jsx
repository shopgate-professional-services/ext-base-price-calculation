import { getProduct } from '@shopgate/engage/product';
import { createSelector } from 'reselect';
import { referenceUnitProp } from '../config';
import { calculateBasePrice, calculateBaseUnit } from '../helpers';

export const hasTierPrice = createSelector(
  getProduct,
  (productData) => {
    if (!productData || productData.isFetching) {
      return [];
    }

    if (productData.price.tiers && productData.price.tiers.length) {
      return true;
    }

    return false;
  }
);

export const getReferenceUnit = createSelector(
  getProduct,
  (productData) => {
    if (!productData || productData.isFetching) {
      return [];
    }

    const referenceUnit = productData.additionalProperties
      .find(prop => prop.label === referenceUnitProp);

    if (referenceUnit) {
      return referenceUnit.value;
    }

    return null;
  }
);

export const getTierPrices = createSelector(
  getProduct,
  getReferenceUnit,
  hasTierPrice,
  (productData, referenceUnit, hasTierPrices) => {
    if (!productData || productData.isFetching) {
      return [];
    }

    if (hasTierPrices && referenceUnit) {
      return productData.price.tiers.map(tier => ({
        from: tier.from,
        to: tier.to,
        unitPrice: tier.unitPrice.toFixed(2).replace('.', ','),
        basePrice: calculateBasePrice(referenceUnit, tier.unitPrice),
        baseUnit: calculateBaseUnit(referenceUnit),
      }));
    }

    return null;
  }
);
