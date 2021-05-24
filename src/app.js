import express from 'express';
import { urlencoded, json } from 'body-parser';
import compression from 'compression';
import routes from './routes';
import { PORT as _PORT } from './config';

const app = express();
const PORT = _PORT || 4000;

// compress all responses
app.use(compression());

// use body-parser middleware
app.use(urlencoded({ extended: false }));
app.use(json());

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
    );

    // Pass to next layer of middleware
    next();
});

app.use(routes()); // all routes

// Catch and send error messages
app.use((err, req, res, next) => {
    if (err) {
        console.error('App.js' + err.message);
        if (!err.statusCode) {
            err.statusCode = 500;
        } // Set 500 app code error if status code not set
        return res.status(err.statusCode).send({
            statusCode: err.statusCode,
            message: err.message,
        });
    }
    next();
});

// 404
app.use(function (req, res) {
    res.status(404).json({
        status: 'Page does not exist',
    });
});

//listen for request
module.exports = app.listen(PORT, () => {
    // console.log('*******API listening*********');
    // console.log(`Listening on PORT: ${PORT} || docker: http://localhost:80/`);
});
