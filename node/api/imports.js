const fetch = require('node-fetch');

const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

const URL = 'http://internal.ats-digital.com:30000/products?size=100';


function importData() {

    return fetch(URL).then((data) => data.json());
}


module.exports = importData;