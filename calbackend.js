const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input. Numbers are required.' });
    }

    const result = num1 + num2;
    res.json({ result });
});

app.listen(3000, () => {
    console.log('Backend is running on http://localhost:3000');
});
