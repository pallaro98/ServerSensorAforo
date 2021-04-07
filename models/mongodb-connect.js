'use strict'
const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://IOTTEAM7:IOTpassword12345@cluster0.loe6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoDB,{
    dbName: 'IOTDB',
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(err);
    });


module.exports = {mongoose};