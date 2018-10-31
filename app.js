const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();

//set up view enjine
app.set('view engine', 'ejs');

//setup routes
app.use('/auth', authRoutes);

//Create home route
app.get('/', (req, res) => {
    res.render('home');
})






app.listen(3000, () => {
    console.log('app now listening to requests on port 3000');
})