'use strict';
console.log('busines/critical');
const model = require('../models/critical');
const rollDice = require('../services/diceService').rollDice;

class Critical {
    constructor(t, b) {
        this.type = t || this.setType();
        this.brutality = b || this.setBrutality();
        this.description = this.setDescription();
    }
    setType() {
        return null;
    }
    setBrutality() {
        return null;
    }
    setDescription() {
        return null;
    }
    async loadAll() {
        const result = await model.find().lean();        
        return result;
    }
    async random() {
        const result = await model.find().lean();
        return result[rollDice(results.length, true)];
    }
}

module.exports = Critical;