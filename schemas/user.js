let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    customerName: {
        type:String,
        required: true,
        trim: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    contactEmail: String

});

let Customer = mongoose.model('Customer', userSchema);
