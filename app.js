const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  console.log('in the ADD PRODUCT page'); 
  res.send('<form action="/products" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

// next(); next() => this allowes the request to continue to the next middleware in line

app.use('/', (req, res, next) => {
  console.log('in another middleware');
  res.send('<h1>Hello world!</h1>') // send() automatically sets content-type 
});

const port = 5000;
app.listen(port);