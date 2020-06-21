const express = require('express')
const path = require('path');
const { Pool } = require('pg');
const { render } = require('ejs');
const PORT = process.env.PORT || 5000
var pool;
pool = new Pool({
  connectionString: 
  process.env.DATABASE_URL
  // 'postgres://postgres:Ianmicro32@localhost/users'
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
app.get('/database', (req,res)=>{
  var getUsersQuery = `SELECT * FROM Person ORDER BY uid`;
  pool.query(getUsersQuery, (error, results) =>{
    if (error)
      res.end(error);

    var rows = results.rows;
    var results = {'rows': rows}
    res.render('pages/viewData',results);
  }
  
  )

  
})
app.get('/editData',(req,res)=>{
  var getPersonQuery = `SELECT * FROM Person ORDER BY uid`;
  pool.query(getPersonQuery, (error, results) =>{
    if (error)
      res.end(error);
    
    var results = {'rows': results.rows}
    res.render('pages/editData',results)
  })
  
})
app.get('/viewTeam',(req,res)=>{

  var getUsersQuery = `SELECT * FROM Person ORDER BY uid`;
  pool.query(getUsersQuery, (error, results) =>{
    if (error)
      res.end(error);
    var results = {'rows':results.rows}
    res.render('pages/viewRectangles',results);
  })
  
})
app.post('/deletePerson',(req,res)=>{
  var id = req.body.idToDelete;
  console.log(id);

  var deletePerson = `DELETE FROM Person Where uid=${id}`;
  pool.query(deletePerson, (error, results)=>{
    if(error){
      res.end(error);
      console.log("DELETE ERROR");
      console.log(deletePerson);
    }
    else
     console.log("User Succesfully deleted");
  })
  res.render('pages/success');
})



app.post('/updatePerson',(req,res)=>{

  var uid = req.body.id;
  var fname = req.body.fName;
  var lname = req.body.lName;
  var size = req.body.size;
  var height = req.body.height;
  var colour = req.body.colour;
  var pet = req.body.pet;
  var type = req.body.type;
  var bio = req.body.bio;
  var age = req.body.age;


  if(fname != "" && fname !== undefined)
  {
    var update = `UPDATE person SET fname='${fname}' WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for first name")
      }
    } 
    )
  }
  if(lname != "" && lname !== undefined)
  {
    var update = `UPDATE person SET lname='${lname}' WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for last name")
      }
    } 
    )
  }
  if(size != "" && size !== undefined)
  {
    var update = `UPDATE person SET size=${size} WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for size")
      }
    } 
    )
  }
  if(age != "" && age !== undefined)
  {
    var update = `UPDATE person SET age=${age} WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for age")
      }
    } 
    )
  }
  if(height != "" && height !== undefined)
  {
    var update = `UPDATE person SET height=${height} WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for Height")
      }
    } 
    )
  }
  if(colour != "" && colour !== undefined)
  {
    var update = `UPDATE person SET colour='${colour}' WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for Colour")
      }
    } 
    )
  }
  if(pet != "" && pet !== undefined)
  {
    console.log(`This is the value of pet: ${pet}`);
    var update = `UPDATE person SET pet='${pet}' WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for Pet")
      }
    } 
    )
  }
  if(type != "" && type !== undefined)
  {
    var update = `UPDATE person SET type='${type}' WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for type")
      }
    } 
    )
  }
  if(bio != "" && bio !== undefined)
  {
    var update = `UPDATE person SET bio='${bio}' WHERE uid=${uid}`;
    pool.query(update,(error,results) =>{
      if(error){
        res.end(error);
        console.log("UPDATE ERROR for bio")
      }
    } 
    )
  }
  
  
  
  res.render('pages/success');

})

app.post('/addPerson',(req,res)=>{

  var uid = req.body.id;
  var fname = req.body.fName;
  var lname = req.body.lName;
  var size = req.body.size;
  var height = req.body.height;
  var colour = req.body.colour;
  var pet = req.body.pet;
  var type = req.body.type;
  var age = req.body.age;
  var bio = req.body.bio;
  var bool = false;

  var addPerson = `INSERT INTO Person VALUES (${uid},${age},'${fname}','${lname}',
    ${height},${size},'${colour}','${pet}','${type}','${bio}')`;

  pool.query(addPerson, (error,results)=>{

    if(error)
    {
      console.log("ERROR Adding someone");
      bool = true
      res.render('pages/failed');
    }
    else{
      res.render('pages/success');
      }
  })
  
})

app.get('/userData/:id', (req,res)=>{

  var id = req.params.id;
  var getUser = `SELECT * FROM person WHERE uid=${id}`;

  pool.query(getUser,(error,results)=>{
    if(error)
      res.end(error);
    var results = {'data':results.rows[0]};
    res.render('pages/userData',results);
  }
  )
  

})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.post('/filterTable',(req,res)=>{



  var getUsersQuery = `SELECT * FROM Person ORDER BY uid`;
  var uid = req.body.id;
  var fname = req.body.fName;
  var lname = req.body.lName;
  var minsize = req.body.minsize;
  var maxsize = req.body.maxsize;
  var minheight = req.body.minheight;
  var maxheight = req.body.maxheight;
  var colour = req.body.colour;
  var pet = req.body.pet;
  var type = req.body.type;
  var minage = req.body.minage;
  var maxage = req.body.maxage;
  console.log(fname);
  pool.query(getUsersQuery, (error, results) =>{
    if (error)
      res.end(error);
    
    
    var rows  = results.rows;
    if(fname != "" && fname !== undefined){
      rows = rows.filter((row)=>{
        return row.fname.includes(fname);
      }
      )
    }
    if(uid != "" && uid!== undefined){
      rows = rows.filter((row)=>{
        return row.uid == uid;
      })

    }
    if(lname != "" && lname!== undefined){
      rows = rows.filter((row)=>{
        return row.lname.includes(lname);
      })

    }
    if(minsize != "" && minsize!== undefined){
      rows = rows.filter((row)=>{
        return row.size >= minsize;

      })

    }
    if(maxsize != "" && maxsize!== undefined){
      rows = rows.filter((row)=>{
        return row.size <= minsize;

      })

    }
    if(minheight != "" && minheight!== undefined){
      rows = rows.filter((row)=>{
        return row.size >= minheight;

      })

      
    }
    if(maxheight != "" && maxheight!== undefined){
      rows = rows.filter((row)=>{
        return row.size <= maxheight;

      })

    }
    if(colour != "" && colour!== undefined){
      rows = rows.filter((row)=>{
        return row.colour.includes(colour);
      })

    }
    if(pet != "" && pet!== undefined){
      rows = rows.filter((row)=>{
        return row.pet.includes(pet);
      })

    }
    if(type != "" && type!== undefined){
      rows = rows.filter((row)=>{
        return row.type.includes(type);
      })

    }
    if(minage != "" && minage!== undefined){
      rows = rows.filter((row)=>{
        return row.age >= minage;

      })

      
    }
    if(maxage != "" && maxage!== undefined){
      rows = rows.filter((row)=>{
        return row.age <= maxage;

      })

    }
    
    
    var results = {'rows': rows}


    res.render('pages/viewData',results);
  }
  
  )

})