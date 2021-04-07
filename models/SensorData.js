var {mongoose} = require('./mongodb-connect');
const async = require('async');


const Schema = mongoose.Schema;

const sensorDataSchema = new Schema ({
    address: String,
    rssi: Number,
    manufacturerData: String,
    timestamp: Number
})

sensorDataSchema.statics.saveData = function (req) {
    let SensorData = this;
    return new Promise((resolve, reject)=>{
        let data;
        let dataArray = [];
        const time = Date.now();
        req.body.forEach(element => {
            data = {
                address: element.Address,
                rssi: element.Rssi,
                manufacturerData: element.ManufacturerData,
                timestamp: time
            }
            dataArray.push(new SensorData(data));
        }); 

        async.eachSeries(dataArray, function(person, asyncdone) {
            person.save(asyncdone);
          }, function(err) {
            if (err){
                reject(err);
            } 
            resolve(dataArray);
          });

    })
}

let SensorData = mongoose.model('sensorData', sensorDataSchema);

module.exports = {SensorData};
