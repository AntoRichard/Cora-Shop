// Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// Local mongoDB database
mongoose.connect("mongodb://localhost/corashop");
// mongoose.connect("mongodb://annamalai:annamalai12@ds135963.mlab.com:35963/annamalai");
// mongoose.connect("mongodb://antoo:Randygold22@ds123556.mlab.com:23556/corashopping");
// mongoose.connect("mongodb://annamalai:annamalai12@ds135963.mlab.com:35963/annamalai");

// User defined routes
const indexRoute = require('./routes/index');
const signupRoute = require('./routes/signup');
const contactRoute = require('./routes/contact');
const cartRoute = require('./routes/cart');
const checkoutRoute = require('./routes/chechout');
const LoginRoute = require('./routes/login');
const LogoutRoute = require('./routes/logout');
const appliRoute = require('./routes/appliances');
const clothRoute = require('./routes/cloth');
const electRoute = require('./routes/electronics');
const furniRoute = require('./routes/furniture');
const addProdRoute = require('./routes/add-products');
const tamroute = require('./routes/tambaram');
const troute = require('./routes/tnagar');
const velaroute = require('./routes/velachery');
const coupenGen = require('./Mailer/send');

const AdminRegister = require('./AdminRoute/AdminRegister');

const app = express();
// PORT address on Localhost 127.0.0.1
const PORT = 3000;
// Middlewre
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

// Routes
app.use(indexRoute);
app.use(signupRoute);
app.use(contactRoute);
app.use(cartRoute);
app.use(checkoutRoute);
app.use(LoginRoute);
app.use(LogoutRoute);
app.use(appliRoute);
app.use(furniRoute);
app.use(electRoute);
app.use(clothRoute);
app.use(addProdRoute);
app.use(velaroute);
app.use(troute);
app.use(tamroute);
app.use(coupenGen);

app.use(AdminRegister);

// app.use('/',(req,res,next)=>{
//     res.status(404).render('error');
// });

// Server running on Localhost(127.0.0.1)://3000
app.listen(PORT,()=>{
    console.log(`Server running in PORT : ${PORT}`);
}); 
