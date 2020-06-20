const express = require('express')
const path = require('path');
const { Pool } = require('pg');
const PORT = process.env.PORT || 5000
var pool;
pool = new Pool({
  connectionString: 'postgres://postgres:Ianmicro32@localhost/users'
})

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// })
// ;
// postgresql-rigid-22557

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
  // .get('/db', async (req, res) => {
  //   try {
  //     const client = await pool.connect();
  //     const result = await client.query('SELECT * FROM test_table');
  //     const results = { 'results': (result) ? result.rows : null};
  //     res.render('pages/db', results );
  //     client.release();
  //   } catch (err) {
  //     console.error(err);
  //     res.send("Error " + err);
  //   }
  // })
app.get('/database', (req,res)=>{

  // var data = {results: [2,3,4,5,6]};
  // res.render('pages/db',data)
  // var data = {results: [2,3,4,5,6]};
  var getUsersQuery = `SELECT * FROM Person`;
  pool.query(getUsersQuery, (error, results) =>{
    if (error)
      res.end(error);
    var results = {'rows':results.rows}
    res.render('pages/db',results);
  }
  
  )

  
})
app.get('/editData',(req,res)=>{
  var getPersonQuery = `SELECT * FROM Person`;
  pool.query(getPersonQuery, (error, results) =>{
    if (error)
      res.end(error);
    var results = {'rows': results.rows}
    res.render('pages/editData',results)
  })
  
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
