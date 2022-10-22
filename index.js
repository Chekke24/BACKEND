const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/test', (req, res) => {
    res.status(200).send("Salio todo bien ")
})

app.listen(process.env.PORT, () => {
    console.log(`${process.env.MESSAGE} on port: ${process.env.PORT}`);
})