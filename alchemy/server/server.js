var express = require('express');
var app = express();
// var sqlite3 = require('sqlite3')
// var db = new sqlite3.Database('db/comments.db')
// install moduel "body parser" at the cmd
// var bodyParser = require('body-parser');

// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: false}));

// routes the backend
app.get('/', function(request, response) {
  response.send('testing');
});

app.get('/comments', function(request, response){
  console.log('GET request received at /comments');

  // method has to be "POST", and the name has to be very crutial
  // db.all is for Query
  // db.all('SELECT * FROM COMMENTS', function(err, rows){
  //   if(err){
  //     console.log("ERROR: " + err);
  //   }else{
  //     response.send(rows);
  //   }
  // });

});

app.post('/comments', function(request, response){
  concole.log("POST request received at /comments");
  // db.run is for other types of SQL commends (dynamic data)
  // question mark "?" is a place holder
  // db.run('INSERT INTO comments VALUES(?, ?)',
  // [request.body.name, request.body.comment, function(err)]{
  //   if(err){
  //     console.log("ERROR: " + err);
  //   }else{
  //     response.status(200).redirect('xxx.html');
  //   }
  // });
});

app.listen(3000, function(){
  console.log("Server is running at port 3000");
});
