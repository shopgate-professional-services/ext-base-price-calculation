import { getProduct } from '@shopgate/engage/product';
import { createSelector } from 'reselect';
import { referenceUnitProp } from '../config';
import { calculateBasePrice, calculateBaseUnit, validateReferenceUnit } from '../helpers';

export const getHasTierPrice = createSelector(
  getProduct,
  (productData) => {
    if (!productData || productData.isFetching) {
      return false;
    }

    if (productData.price.tiers && productData.price.tiers.length) {
      return true;
    }

    return false;
  }
);

export const getHasStrikePrice = createSelector(
  getProduct,
  (productData) => {
    if (!productData || productData.isFetching) {
      return false;
    }

    if (productData.price.unitPriceStriked && productData.price.unitPriceStriked > 0) {
      return true;
    }

    return false;
  }
);

export const getReferenceUnit = createSelector(
  getProduct,
  (productData) => {
    if (!productData || productData.isFetching || !productData.additionalProperties) {
      return null;
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
  getHasTierPrice,
  (productData, referenceUnit, hasTierPrices) => {
    if (!productData || productData.isFetching) {
      return null;
    }

    if (hasTierPrices && referenceUnit) {
      if (!validateReferenceUnit(referenceUnit)) {
        return null;
      }
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

