import { unitMapping } from '../config';

/**
 * @param {string} referenceUnit reference Unit
 * @returns {string}
 */
export const getReferenceUnitNumber = (referenceUnit) => {
  if (!referenceUnit) {
    return false;
  }

  const referenceUnitNumber = Number(referenceUnit.replace(/([a-z|[A-Z]|\s)/g, '').replace(',', '.'));

  return referenceUnitNumber;
};

/**
 * @param {string} referenceUnit reference Unit
 * @returns {string}
 */
export const getReferenceUnitString = (referenceUnit) => {
  if (!referenceUnit) {
    return false;
  }

  const referenceUnitString = referenceUnit.replace(/(\d+|\.+|,+|\s)/g, '').toLowerCase();

  return referenceUnitString;
};

/**
 * @param {string} referenceUnit reference Unit
 * @returns {string}
 */
export const getReferenceUnitStringDisplay = (referenceUnit) => {
  if (!referenceUnit) {
    return false;
  }

  const referenceUnitString = referenceUnit.replace(/(\d+|\.+|,+|\s)/g, '');

  return referenceUnitString;
};

/**
 * @param {string} referenceUnit reference Unit
 * @returns {string}
 */
export const validateReferenceUnit = (referenceUnit) => {
  if (!referenceUnit) {
    return false;
  }

  const referenceUnitNumber = getReferenceUnitNumber(referenceUnit);
  const referenceUnitString = getReferenceUnitString(referenceUnit);
  const referenceUnitMultiplicator = unitMapping[referenceUnitString];

  if (typeof referenceUnitNumber !== 'number' || typeof referenceUnitString !== 'string' || !referenceUnitMultiplicator) {
    return false;
  }

  return true;
};

/**
 * @param {string} referenceUnit reference Unit
 * @param {string} tierPrice tier price
 * @returns {Object}
 */
export const calculateBasePrice = (referenceUnit, tierPrice) => {
  if (!referenceUnit || !tierPrice) {
    return false;
  }

  const referenceUnitNumber = getReferenceUnitNumber(referenceUnit);
  const referenceUnitString = getReferenceUnitString(referenceUnit);

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

  const referenceUnitString = getReferenceUnitString(referenceUnit);
  const referenceUnitStringDisplay = getReferenceUnitStringDisplay(referenceUnit);
  const referenceUnitMultiplicator = unitMapping[referenceUnitString];

  return `${referenceUnitMultiplicator} ${referenceUnitStringDisplay}`;
};
