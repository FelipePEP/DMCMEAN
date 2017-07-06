let express = require('express');
let router = express.Router();
let calculator = require('../controllers/calculatorController');

module.exports = (app)=>{
    app.get('/calculator1',(req,res)=>{
        res.send(calculator.index(1));
    });
    app.get('/calculator2',(req,res)=>{
        res.send(calculator.index(2));
    });
    app.get('/calculator3',(req,res)=>{
        res.send(calculator.index(3));
    });
    app.get('/calculator4',(req,res)=>{
        res.send(calculator.index(4));
    });
    app.get('/calculator5',(req,res)=>{
        res.send(calculator.index(5));
    });
};