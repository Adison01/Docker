// // Import the express module
// const express = require('express');

// // Create an instance of an Express application
// const app = express();

// // Define a port to listen on
// const PORT = process.env.PORT || 4000;

// // Set up a route to respond to GET requests at the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server and listen for incoming requests
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
// app.use(cors());

const PORT = process.env.PORT || 7000

app.get('/', (req, res) => {
    res.json([
        {
            "id": "1",
            "title": "book review-1 ABC"
        },
        {
            "id": "2",
            "title": "book review-2"
        },
        {
            "id": "3",
            "title": "book review-3"
        }
    ])
})

app.listen(PORT, () => {
    console.log(`app listen on ${PORT}....`);
})