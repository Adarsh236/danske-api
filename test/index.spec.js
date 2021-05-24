let mongooseDB = require('../src/db/connection');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../index.js');

chai.use(chaiHttp);

//Our parent block
describe('Test API', () => {
    before((done) => {
        mongooseDB
            .connect()
            .then(() => done())
            .catch((err) => done(err));
    });
    /*
     * Test the /GET route
     */
});
