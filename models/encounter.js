console.log('model/encounter');
const mongoose = require('mongoose');

module.exports = mongoose.model('Encounter', mongoose.Schema({
    type: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true,
        index:{
            unique: true
        }
    }
}));