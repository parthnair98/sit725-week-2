const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = Number(num1) + Number(num2);
    res.send(`The sum of the two numbers is ${result}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
