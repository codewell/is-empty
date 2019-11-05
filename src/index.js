
/**
 * Check whether a value is empty or not
 * @param {string | object | array} data - String, object or array
 * @return {boolean} - true if empty else false
 */
const isEmpyt = (data) => {
  const dataType = typeof data;
  switch (dataType) {
    case 'string': {
      return data === '';
    }

    case 'object': {
      if (Array.isArray(data)) {
        return data.length === 0;
      } else {
        return Object.keys(data).length === 0 && data.constructor === Object
      }
    }

    default: {
      const irrelevantError = new Error(`Seems irrelevant to ask if a ${typeof data} is empty.\nMaybe isDefined would be a better question?`)
      throw irrelevantError;
    }
  }
};

module.exports = isEmpyt;
