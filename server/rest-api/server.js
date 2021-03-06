import express from 'express';
import mysql from 'mysql';
import dateFormat from 'dateformat';
import bodyParser from 'body-parser';
// Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
// if(!Date.now) Date.now = function() { return new Date(); }
// Date.time = function() { return Date.now().getUnixTime(); }

const app = express();
// router.use(bodyParser.json());

const sell_obj = {
  seller: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076",
  tokenA: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076",
  tokenB: "0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076",
  valueA: 5,
  valueB: 10,
  date: new Date().toISOString().slice(0, 19).replace('T', ' ')
}

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'turing',
  database: 'turing_database'
});

connection.connect((err) => {
  if(!!err) {console.log(err)};
  console.log('MySQL client is connected!');
});

router.get('/sell', (req, res) => {
  console.log('hit sell endpoint')
  // connection.query('INSERT INTO orders SET ?', sell_obj, (error, result) => {
  //   if(!!error) {console.log(error)};
  //   console.log('result', result);
  // });

  res.end()
})

router.get('/approve', (req, res) => {

});

router.listen(6001, () => {
  console.log('Express server on port 6001');
})
