'use strict';
const rollDice = require("../services/diceService").rollDice;
const db = require("../DB/db");

class generator {
    constructor(t,e,h,d) {
        this.type = t;
        this.enviroment = e;
        this.hour = h;
        this.distance =d;
        this.encounter={
            "type":"",
            "description":""};                
    }

    startGenerator(){
        this.getType();        
        this.getEnvyroment();
        this.getHour();
        this.getDistance();
        this.getEncounter();        
        return this.response();        
    }
    getType(){
        this.type = rollDice(4,true);
        this.encounter.type = db[this.type][0];
    }    
    getEnvyroment(){
        this.enviroment = db[5][rollDice(12,true)];
    }
    getHour(){
        this.hour = rollDice(23,true);
    }
    getDistance(){
        (this.hour > 19)?this.distance = rollDice(19,false) + 1 : this.distance = rollDice(50,false) + 20;        
    }
    getEncounter(){                 
        let descriptionRoll = rollDice(4,false);        
        this.encounter.description = db[this.type][descriptionRoll];                 
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

module.exports = generator;