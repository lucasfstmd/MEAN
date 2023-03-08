const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err) {
    return err ? console.log(err) : console.log('MongoDB Conectado com Sucesso.');
});


app.use(cors());
app.use(cookieParser());
app.use(express.json);
app.use(routes);

app.listen(port, function (){
    console.log(`server runing on port ${port}`)
})
