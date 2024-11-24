const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URL;

const DB_Connect = () => {
    mongoose.connect(url).then(
        console.log("Connected to MONGODB")
    )
}

module.exports = {DB_Connect};