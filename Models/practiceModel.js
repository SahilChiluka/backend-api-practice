const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    city: {
        type: String,
    },
}, {timestamps: true});

const practiceModel = mongoose.model('practice', practiceSchema);

module.exports = practiceModel;