const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.port || 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("view", "./src/views");
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.send('index', { username: 'Tanakrit', customer: ["Paramee,Kanokporn,Phumsan"] });
})

app.listen(port, () => {
    debug("Listening on port", chalk.green(" : ", port));
})