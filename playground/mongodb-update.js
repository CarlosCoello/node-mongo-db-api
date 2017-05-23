//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5923b53a2f5685083df6cb82')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then( (result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5923ae305f66f3103236a414')
}, {
  $set: {
    name: 'Carmen'
  },
  $inc: {
    age: 61
  }
}, {
  returnOriginal: false
}).then( (result) => {
  console.log(result);
});
  //db.close();
});
