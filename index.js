const express = require('express');
const PORT = 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require("express-session");
const MongoStore = require('connect-mongo');



app.use(expressLayouts);
app.use(express.static('./assets'));

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//mongo store is used to store the session cookie
app.use(session({
    name: 'csv/uplaod',
    secret: "somenthing",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb+srv://bendkolinanda12:Nanda123@cluster0.sj5feyg.mongodb.net/csv?retryWrites=true&w=majority',
            autoRemover: 'disabled'
        },
        function (err) {
            console.log("Error in the mongo-store");
        }
    ),
}));



//routes
app.use('/', require('./routes/csvRoutes'));

//server listening
app.listen(PORT, (err) => {
    if (err) console.log("error listening on", PORT);

    console.log('Server Connetcting on port no:', PORT);
})
