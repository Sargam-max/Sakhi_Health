const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'submit-form.html'));
});

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Prepare the data to save
    const data = Name: ${name}, Email: ${email}, Message: ${message}\n;

    // Save data to 'form-data.txt'
    fs.appendFile('form-data.txt', data, (err) => {
        if (err) {
            console.error('Failed to save data:', err);
            res.status(500).send('Failed to save data.');
        } else {
            res.send('Form data saved successfully!');
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});