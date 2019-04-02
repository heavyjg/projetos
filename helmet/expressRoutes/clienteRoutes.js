// ClienteRoutes.js

var express = require('express');
var app = express();
var ClienteRoutes = express.Router();

// Require Cliente model in our routes module
var Cliente = require('../models/Cliente');

// Defined store route
ClienteRoutes.route('/add').post(function (req, res) {
    var cliente = new Cliente(req.body);
    cliente.save()
        .then(cliente => {
            res.status(200).json({'Cliente': 'Cliente added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
ClienteRoutes.route('/').get(function (req, res) {
    Cliente.find(function (err, clientes){
        if(err){
            console.log(err);
        }
        else {
            res.json(clientes);
        }
    });
});

// Defined edit route
ClienteRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Cliente.findById(id, function (err, Cliente){
        res.json(Cliente);
    });
});

//  Defined update route
ClienteRoutes.route('/update/:id').post(function (req, res) {
    Cliente.findById(req.params.id, function(err, cliente) {
        if (!Cliente)
            return next(new Error('Could not load Document'));
        else {
            cliente.name = req.body.name;
            cliente.endereco = req.body.endereco;
            cliente.numero = req.body.numero;

            cliente.save().then(cliente => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
ClienteRoutes.route('/delete/:id').get(function (req, res) {
    Cliente.findByIdAndRemove({_id: req.params.id}, function(err, cliente){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ClienteRoutes;