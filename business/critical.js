'use strict';

const model = require('../models/critical');

class Critical{
    constructor(t,b){
        this.type = t || this.setType();
        this.brutality = b || this.setBrutality();
        this.description = this.setDescription();
    }
    setType(){return null}
    setBrutality(){return null}
    setDescription(){return null}
    async loadAll(){ 
        return await model.find().lean();
    }
}

module.exports = Critical;