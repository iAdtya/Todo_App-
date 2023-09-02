const mongoose = require('mongoose');  
const MONGO_URL = 'mongodb://127.0.0.1:27017/todo_app';

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = { db, MONGO_URL }; // Export the db and mongoURL 