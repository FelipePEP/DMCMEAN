const mongoose = require('mongoose');


module.exports = mongoose.model('Critical',mongoose.Schema({
    type: { 
        type: String,
        require: true
    },
    brutality: {
        type: String,
        require: true
    },
    description:{
        type: String,
        required: true,
        index:{
            unique: true
        }
    }
}))