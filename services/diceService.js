class diceService {
    static rollDice(faces,zero){        
        return zero ?  Math.floor((Math.random() * faces)) :  Math.floor((Math.random() * faces + 1));        
    }    
}

module.exports = diceService;