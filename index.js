// console.info('Hello world!');
// Load required libraries from node_modules
const express = require('express');
const hbs = require('express-handlebars');

// Configure the environment
// From CLI, from env variable, default
const PORT = parseInt(process.argv[2], 10) || 3000

// Create an instance of the express application
const app = express();

// Configure express
// Serve HTML files from the public directory
// __dirname = path which index.js exist within
// app.use(express.static(__dirname + '/public'))
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Start express
app.listen(PORT, () => { // first parameter = port number
  console.log(`Application started on port ${PORT} at ${new Date()}`)
})
