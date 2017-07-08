'use strict';
const rollDice = require("../services/diceService").rollDice;
const db = require("../DB/db");

class Generator {
    constructor(t,e,h,d) {
        this.type = t || this.setType();
        this.enviroment = e || this.setEnvyroment();
        this.hour = h || this.setHour();
        this.distance =d || this.setDistance();
        this.setEncounter();                 
    }    
    setType(){
        return rollDice(4,true);        
    }    
    setEnvyroment(){
        return db[5][rollDice(12,true)];
    }
    setHour(){
        return rollDice(23,true);
    }
    setDistance(){
        return (this.hour > 19)? rollDice(19,false) + 1 : rollDice(50,false) + 20;        
    }
    setEncounter(){                 
        let descriptionRoll = rollDice(4,false);        
        this.encounter.description = db[this.type][descriptionRoll];
        this.encounter.type = db[this.type][0];                 
    }
    response(){
        let response = "O encontro será às " + this.hour +
            " horas em " + this.enviroment +
            ". Um " + this.encounter.description +
            " está a " + this.distance +
            " metros do grupo.";
        return response;
    }
}

module.exports = Generator;