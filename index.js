const productAttributs = Object.values({
  sizes: ['P', 'M', 'G'],
  colors: ['White', 'Black'],
  genders: ['Male', 'Female'],
});

const getCartesianProduct = arr => {
  const cartesiamProduct = [];

  (function myfunc(idx = 0, values = '') {
    const element = arr[idx];
    element
      ? element.forEach(val => myfunc(idx + 1, [...values, val]))
      : cartesiamProduct.push(values);
  })();

  return cartesiamProduct;
};

console.log(getCartesianProduct(productAttributs));

// Expected
// [
//   [ 'P', 'White', 'Male' ],
//   [ 'P', 'White', 'Female' ],
//   [ 'P', 'Black', 'Male' ],
//   [ 'P', 'Black', 'Female' ],
//   [ 'M', 'White', 'Male' ],
//   [ 'M', 'White', 'Female' ],
//   [ 'M', 'Black', 'Male' ],
//   [ 'M', 'Black', 'Female' ],
//   [ 'G', 'White', 'Male' ],
//   [ 'G', 'White', 'Female' ],
//   [ 'G', 'Black', 'Male' ],
//   [ 'G', 'Black', 'Female' ]
// ]
