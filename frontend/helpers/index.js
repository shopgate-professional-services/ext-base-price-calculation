import { unitMapping } from '../config';

/**
 * @param {string} referenceUnit reference Unit
 * @param {string} tierPrice tier price
 * @returns {Object}
 */
export const calculateBasePrice = (referenceUnit, tierPrice) => {
  if (!referenceUnit || !tierPrice) {
    return false;
  }

  const referenceUnitNumber = referenceUnit.replace(/([a-z|[A-Z]|\s)/g, '').replace(',', '.');
  const referenceUnitString = referenceUnit.replace(/(\d+|\.+|,+|\s)/g, '').toLowerCase();
  const referenceUnitMultiplicator = unitMapping[referenceUnitString];

  return (((tierPrice / referenceUnitNumber) * referenceUnitMultiplicator).toFixed(2)).replace('.', ',');
};

/**
 * @param {string} referenceUnit reference Unit
 * @returns {string}
 */
export const calculateBaseUnit = (referenceUnit) => {
  if (!referenceUnit) {
    return false;
  }

  const referenceUnitStringMapping = referenceUnit.replace(/(\d+|\.+|,+|\s)/g, '').toLowerCase();
  const referenceUnitString = referenceUnit.replace(/(\d+|\.+|,+|\s)/g, '');
  const referenceUnitMultiplicator = unitMapping[referenceUnitStringMapping];

  return `${referenceUnitMultiplicator} ${referenceUnitString}`;
};
