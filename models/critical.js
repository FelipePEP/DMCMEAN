console.log('model/critical');
const mongoose = require('mongoose');

module.exports = mongoose.model('Critical', mongoose.Schema({
    type: {
        type: String,
        require: true
    },
    brutality: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    }
}));

/*
{
    
    "type" : "normal",
    "effect" : "Dano x2 e alvo faz Save contra atordoamento"
}
{
   
    "type" : "Brutal",
    "effect" : "Dano x3"
}
{
    
    "type" : "Brutal",
    "effect" : "Dano x3 e alvo cai atordoado"
}
{
   
    "type" : "Brutal",
    "effect" : "Dano x2 e alvo desmaia"
}
{
  
    "type" : "Brutal",
    "effect" : "Dano x2 e sangramento de 1d4 de dano por rodada"
}
{
    
    "type" : "Brutal",
    "effect" : "Dano x2 e alvo faz Save contra morte"
}
{
    
    "type" : "Mortal",
    "effect" : "Dano x4"
}
{
   
    "type" : "Mortal",
    "effect" : "Dano x3 e alvo faz Save contra morte"
}
{
    
    "type" : "Ligth",
    "effect" : "Dano normal e alvo cai"
}
{
    
    "type" : "Ligth",
    "effect" : "Dano normal e alvo fica atordoado"
}
{
    
    "type" : "Ligth",
    "effect" : "Dano normal e alvo é desarmado"
}
*/