const express = require('express');
const app = express();
const port = 3000;
const {db, MONGO_URL} = require('./config/mongoose.js');

//?midleware
app.use(express.urlencoded({ extended: true }));

//?static files
app.use(express.static("./assets"));

//?view engine
app.set('view engine', 'ejs');
app.set('views', './views');  

//?static files
app.use('/', require('./routes'));

app.listen(port,(err) => {
  if (err) {
      console.log(`Error: ${err}`);
  }
  console.log(`Yupp! Server is running on port ${port}`);
});