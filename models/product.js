const fs = require('fs');
const path = require('path');

// const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  // storing to the products array
  save () {
    // products.push(this);
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data', 
      'products.json'
    );

    fs.readFile(p, (err, fileContent) => {
      
      let products = [];

      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })

  }
  // returning the products array so that is available publicly
  static fetchAll() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data', 
      'products.json'
    );
    // red the file from path
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent)
    });
  }
}