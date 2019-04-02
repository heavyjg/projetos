// Cliente.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Cliente = new Schema({
    nome: {
        type: String
    },
    endereco: {
        type: String
    },
    numero: {
    	type: Number
    }
},{
    collection: 'clientes'
});

module.exports = mongoose.model('Cliente', Cliente);