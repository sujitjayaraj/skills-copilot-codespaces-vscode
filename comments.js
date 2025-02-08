// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route to handle GET requests to the /comments path
app.get('/comments', (req, res) => {
  res.send('This is the comments route!');
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Run the server using node comments.js
// Open a browser and navigate to http://localhost:3000/comments
// You should see the message This is the comments route! displayed in the browser.