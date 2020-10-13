const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); 

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product',  { path: '/admin/add-product', pageTitle: 'Add Products' })
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
})

exports.routes = router;
exports.products = products;

// next(); next() => this allowes the request to continue to the next middleware in line