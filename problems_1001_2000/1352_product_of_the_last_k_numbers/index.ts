const ProductOfNumbers = function () {
  this.prefixProduct = [];
};

ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.prefixProduct = [];
  } else if (this.prefixProduct[this.prefixProduct.length - 1] !== undefined) {
    this.prefixProduct.push(
      this.prefixProduct[this.prefixProduct.length - 1] * num
    );
  } else {
    this.prefixProduct.push(num);
  }
};

ProductOfNumbers.prototype.getProduct = function (k) {
  const { length } = this.prefixProduct;
  const index = length - k - 1;
  return length < k
    ? 0
    : this.prefixProduct[length - 1] / (this.prefixProduct[index] || 1);
};
