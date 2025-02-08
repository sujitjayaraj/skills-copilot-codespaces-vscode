// Create a web server
// 1. Load the express module
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route for GET method
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// 5. Run the server
// node comments.js
// 6. Open the browser and type http://localhost:3000
// 7. To stop the server, press Ctrl + C
// 8. Change the message in the send method and refresh the page
// 9. Add a new route for GET method
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});
// 10. Add a new route for POST method
app.post('/comments', (req, res) => {
  res.send('This is the comments page');
});
// 11. Add a new route for PUT method
app.put('/comments', (req, res) => {
  res.send('This is the comments page');
});
// 12. Add a new route for DELETE method
app.delete('/comments', (req, res) => {
  res.send('This is the comments page');
});
// 13. Add a new route for PATCH method
app.patch('/comments', (req, res) => {
  res.send('This is the comments page');
});
// 14. Add a new route for OPTIONS method
app.options('/comments', (req, res) => {
  res.send('This is the comments page');
});
// 15. Add a new route for HEAD method
app.head('/comments', (req, res) => {
  res.send('This is the comments page');
});