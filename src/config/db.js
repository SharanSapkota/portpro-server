const mongoose = require('mongoose');
const KEYS = require('./keys.example');

const connectToMongoDb = () => {
    try{
        mongoose.connect(
            KEYS.MONGODB_URI,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            },
            () => {
                console.log("DB connection established");
            }
        );
    }catch(e){
        console.log(e.message);
    }
};

module.exports = connectToMongoDb;