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
        const results = await model.find().lean();
        return results;
    }
    async random() {
        const results = await model.find().lean();
        return results[rollDice(results.length, true)];
    }
}

module.exports = Critical;