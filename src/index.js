import express from 'express';
import { engine } from 'express-handlebars';
// import morgan from "morgan";
import route from './routes/index.js';
// const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.static('./src/public'));

app.use(express.urlencoded({ extended: true })); //Middleware form HTTP
//
app.use(express.json()); //Middleware xu ly XMLHttpRequest, fetch, axios, ajax

// HTTP request
// app.use(morgan("combined"));

//Template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');

app.set('views', './src/resources/views');

route(app);

//127.0.0.1 - localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
