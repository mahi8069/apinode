var express = require('express'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.all('/*', function (req,res,next) {
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers','Content-type,Accept,X-Access-Token,X-Key');
        if(req.method=='OPTIONS'){res.status(200).end();}
        else{next();}
        });

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root123',
    database : 'Abacus_Education'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

//const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE Abacus_Education';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// center

app.get('/createcentertable', (req, res) => { 

   
    let sql = 'CREATE TABLE Center(id int AUTO_INCREMENT, center_name VARCHAR(255), owner VARCHAR(255), address VARCHAR(255), city VARCHAR(255), zipcode VARCHAR(255), state VARCHAR(255), contact VARCHAR(255), datep VARCHAR(255), details VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('center table created...');
    });
});

//insert enuiry

app.post('/addcenter', (req, res) => {


    
   var  center_name = req.body.center_name;
   var  owner = req.body.owner;
    var address = req.body.address;
   var  city = req.body.city;
     var zipcode = req.body.zipcode;
      var state = req.body.state;
       var contact = req.body.contact;
        var datep = req.body.datep;
         var details = req.body.details;
   


     

       /* var title=req.body.title;
        var body= req.body.body;*/



    let post = {center_name:center_name,owner:owner,address:address,city:city,zipcode:zipcode,state:state,contact:contact,datep:datep,details:details};
    let sql = 'INSERT INTO Center SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
         res.status(200).json({status:'success',message:'record recored',result:result});
    });
});
//
// show enquiry
app.get('/getcenter', (req, res) => {
    let sql = 'SELECT * FROM Center';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.status(200).json({status:'success',message:'succuss',results:results});
    });
});

//

// enquiry table

app.get('/createfaqtable', (req, res) => { 

   
    let sql = 'CREATE TABLE FAQ(id int AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), email VARCHAR(255), contact VARCHAR(255), question VARCHAR(255),PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('career table created...');
    });
});

//insert enuiry

app.post('/addfaq', (req, res) => {

    fname,lname,email,contact,question
    
   var  fname = req.body.fname;
   var  lname = req.body.lname;
    var email = req.body.email;
   var  contact = req.body.contact;
     var question = req.body.question;
   


     

       /* var title=req.body.title;
        var body= req.body.body;*/



    let post = {fname:fname,lname:lname,email:email,contact:contact,question:question};
    let sql = 'INSERT INTO FAQ SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
         res.status(200).json({status:'success',message:'record recored',result:result});
    });
});
//
// show enquiry
app.get('/getfaq', (req, res) => {
    let sql = 'SELECT * FROM FAQ';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.status(200).json({status:'success',message:'succuss',results:results});
    });
});
// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE Video_Request(id int AUTO_INCREMENT, first_name VARCHAR(255), center VARCHAR(255), contact VARCHAR(255), user_name VARCHAR(255), password VARCHAR(255), state VARCHAR(255), status boolean, PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});
// enquiry table

app.get('/createenquirytable', (req, res) => {
    let sql = 'CREATE TABLE Enquiry(id int AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), email VARCHAR(255), mobile VARCHAR(255), city VARCHAR(255), state VARCHAR(255), efor VARCHAR(255), comment VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('enquiry table created...');
    });
});

//insert enuiry

app.post('/addenquiry', (req, res) => {
   var  fname = req.body.fname;
   var  lname = req.body.lname;
    var email = req.body.email;
   var  mobile = req.body.mobile;
     var city = req.body.city;
    var state = req.body.state;
     var efor = req.body.efor;
      var comment = req.body.comment;


     

       /* var title=req.body.title;
        var body= req.body.body;*/



    let post = {fname:fname,lname:lname,email:email,mobile:mobile,city:city,state:state,efor:efor,comment:comment};
    let sql = 'INSERT INTO Enquiry SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
         res.status(200).json({status:'success',message:'record recored',result:result});
    });
});
//
// show enquiry
app.get('/getenquiry', (req, res) => {
    let sql = 'SELECT * FROM Enquiry';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.status(200).json({status:'success',message:'succuss',results:results});
    });
});
// career
// enquiry table

app.get('/createcareertable', (req, res) => { 
   
    let sql = 'CREATE TABLE Career(id int AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), email VARCHAR(255), contact VARCHAR(255), apply_for VARCHAR(255), exp VARCHAR(255), msg VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('career table created...');
    });
});

//insert enuiry

app.post('/addcareer', (req, res) => {
    
   var  fname = req.body.fname;
   var  lname = req.body.lname;
    var email = req.body.email;
   var  contact = req.body.contact;
     var apply_for = req.body.apply_for;
    var state = req.body.state;
     var exp = req.body.exp;
      var msg = req.body.msg;


     

       /* var title=req.body.title;
        var body= req.body.body;*/



    let post = {fname:fname,lname:lname,email:email,contact:contact,apply_for:apply_for,exp:exp,msg:msg};
    let sql = 'INSERT INTO Career SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
         res.status(200).json({status:'success',message:'record recored',result:result});
    });
});
//
// show enquiry
app.get('/getcareer', (req, res) => {
    let sql = 'SELECT * FROM Career';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.status(200).json({status:'success',message:'succuss',results:results});
    });
});
//
// Insert post 1
app.post('/addpost1', (req, res) => {
   var  first_name = req.body.first_name;
   var   center = req.body.center;
    var contact = req.body.contact;
   var  user_name = req.body.user_name;
     var password = req.body.password;
    var state = req.body.state;
     var status = false;


     

       /* var title=req.body.title;
        var body= req.body.body;*/



    let post = {first_name:first_name, center:center,contact:contact,user_name:user_name,password:password,state:state,status:status};
    let sql = 'INSERT INTO Video_Request SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
         res.status(200).json({status:'success',message:'record recored',result:result});
    });
});
// update
app.put('/updatedpost/:id', (req, res) => {
   var  first_name = req.body.status;
    let post = first_name;
    let sql = `UPDATE Video_Request SET status = '${post}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
         res.status(200).json({status:'success',message:'record recored',result:result});
    });
});


//
//username and password match
app.post('/loginuser', (req, res) => {
   var  user_name = req.body.user_name;
   var password= req.body.password;
    let user_name1 = user_name;
    let password1= password;
    let sql = `SELECT id,user_name , password from video_request WHERE user_name='${user_name1}' and password='${password1}'`;
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
         res.status(200).json({status:'success',message:'record recored',result:result});
    });
});
//

// Insert post 2
app.get('/addpost2', (req, res) => {
    let post = {title:'Post Two', body:'This is post number two'};
    let sql = 'INSERT INTO Video_Request SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM Video_Request';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.status(200).json({status:'success',message:'succuss',results:results});
    });
});

// Select single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM Video_Request WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.status(200).json({status:'success',message:'succuss',result:result});
    });
});

// Update post
app.post('/updatepost/:id', (req, res) => {
     var  center = req.body.center;
    let status2 = {center:center};
    let sql = `UPDATE Video_Request SET center = '${status2}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM Video_Request WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});