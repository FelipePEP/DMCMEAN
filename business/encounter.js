'use strict';
console.log('busines/encounter');
const model = require('../models/encounter');
const rollDice = require('../services/diceService').rollDice;

class Encounter {
    constructor(t, e, h, d) {
        this.type = t || this.setType();
        this.enviroment = e || this.setEnvyroment();
        this.hour = h || this.setHour();
        this.distance = d || this.setDistance();
        this.description = this.setEncounter();
    }
    setType(){
        return rollDice(4, true);
    }
    setEnvyroment(){
        return //db[5][rollDice(12, true)];
    }
    setHour(){
        return rollDice(23, true);
    }
    setDistance(){
        return (this.hour > 19)? rollDice(19, false) + 1 : rollDice(50, false) + 20;
    }
    setEncounter(){
        const descriptionRoll = rollDice(4, false);
        return this.description //= db[this.type][descriptionRoll];
    }
}

module.exports = Encounter;