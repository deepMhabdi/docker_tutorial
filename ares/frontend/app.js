const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route: Fetch data from Flask and show on EJS page
app.get('/', async (req, res) => {
    try {
        const response = await axios.get("http://172.17.0.1:8000/api");
        const names = response.data.data;

        res.render('index', { names });
    } catch (error) {
        console.error(error);
        res.send("Error fetching backend data");
    }
});

app.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
});
