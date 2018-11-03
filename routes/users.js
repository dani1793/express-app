var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req,res, next){
  console.log('inside get of user');
  res.send({test: 'Testing the docker containerization'});
  /*mongo_client.connect(url, function(err, db){

      if(err)
          throw err;

      var dbo = db.db('usersdb');

      if(req.query.age && req.query.op)
      {
          age = parseInt(req.query.age);
          q = {};

          if (req.query.op == 'lt')
              q = {age: {$lt : age}};
          if (req.query.op == 'lte')
              q = {age: {$lte : age}};
          if (req.query.op == 'gt')
              q = {age: {$gt : age}};
          if (req.query.op == 'gte')
              q = {age: {$gte : age}};
          if (req.query.op == 'eq')
              q = {age: {$eq : age}};
          if (req.query.op == 'ne')
              q = {age: {$ne : age}};

          dbo.collection('Users').find(q).toArray(function(err, users){

          if(err)
              res.status(500).send(err);
          else
          {
              res.json(users);
              console.log(users);
              db.close();
          }
      });
      }
      else {
          dbo.collection('Users').find().toArray(function (err, users) {

              if (err)
                  res.status(500).send(err);
              else {
                  res.json(users);
                  db.close();
              }

          });
      }

  });*/
});

module.exports = router;
