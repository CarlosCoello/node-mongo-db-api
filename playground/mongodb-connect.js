//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'I am a new string',
  //   completed: false
  // }, (error, result) => {
  //   if(error){
  //     return console.log('Unable to insert todo', error);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Carlos',
  //   age: 36,
  //   location: 'Monterrey'
  // }, (error, result) => {
  //   if(error){
  //     return console.log('Unable to insert user', error);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined,2));
  //
  // });

  db.close();
});
