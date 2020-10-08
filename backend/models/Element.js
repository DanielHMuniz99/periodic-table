const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let elementSchema = new Schema({
    name: {
        type: String
    }
}, {
    collection: 'elements'
})

module.exports = mongoose.model('Element', elementSchema)