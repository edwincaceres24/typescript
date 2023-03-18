"use strict";
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["Ordered"] = 1] = "Ordered";
    ProductStatus[ProductStatus["Dispached"] = 2] = "Dispached";
    ProductStatus[ProductStatus["Delivered"] = 3] = "Delivered";
})(ProductStatus || (ProductStatus = {}));
const productStatus = ProductStatus.Dispached;
console.log(productStatus);
