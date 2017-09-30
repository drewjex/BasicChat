var util = {
  isFunction: (value) => {
    return value !== void 0 && value.constructor === Function;
  },
  random(min, max) {
    return Math.random() * (max - min) + min;
  },
};