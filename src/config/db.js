const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDb = () =>{
    try{
        mongoose.connect(
            process.env.MONGO_URI,
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