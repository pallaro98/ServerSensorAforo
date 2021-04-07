const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

let jsonParser = bodyParser.json();

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(jsonParser);

//MONGODB
let {SensorData} = require('./models/SensorData');

app.route('/')
    .get(async (req, res) => {
        res.send("Working");
    });

app.route('/')
    .post(async (req, res) => {
        SensorData.saveData(req).then((u)=>{
            res.send(u);
        }).catch((e) => {
            console.log(e);
        });
    });
////////////////////////


app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}!`));
