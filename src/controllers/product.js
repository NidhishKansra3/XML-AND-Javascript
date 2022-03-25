const products = require('../data/products.json')

const getAll = ({ id, name, description, price }) =>
  new Promise((resolve) => {
    let productArray = Array.from(products);

    if (id) {
      productArray = productArray.filter((item) => item.id === id);
    }

    if (name) {
      productArray = productArray.filter((item) => item.name === name);
    }

    if (description) {
      productArray = productArray.filter((item) => item.description === description);
    }

    if (price) {
      productArray = productArray.filter((item) => item.price === Number(price));
    }

    resolve({ code: 200, data: productArray });
  });


  const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: JSON.stringify(product) });
    } else {
      resolve({
        code: 404,
        data: { message: `error` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};