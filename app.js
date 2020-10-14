const express = require('express');
const app = express();
const path = require('path');
const expressHbs = require('express-handlebars');

app.engine('handlebars', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
app.set('view engine', 'handlebars');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: '404 Page'});
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));