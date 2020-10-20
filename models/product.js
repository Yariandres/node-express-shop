const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data', 
  'products.json'
);

const getProductsFromFIle = (cb) => {  
  // red the file from path
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent))
    }
  });
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  // storing to the products array
  save () {
    getProductsFromFIle(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    });
  }

  // returning the products array so that is available publicly
  static fetchAll(cb) {
    getProductsFromFIle(cb);
  }
}