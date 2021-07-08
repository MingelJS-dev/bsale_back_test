
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes')
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.listen(PORT, () => console.log('Server running on port ', PORT));
app.use('/', routes);

// const connection = mysql.createConnection({
//     host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//     user: 'bsale_test',
//     password: 'bsale_test',
//     database: 'bsale_test'
// });


// connection.connect(err => {
//     if (err) throw new Error('Error server running');
// });

