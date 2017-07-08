let result;

class diceService {
    static rollDice(faces,zero){        
        (zero) ?  result = Math.floor((Math.random() * faces)) : result = Math.floor((Math.random() * faces + 1));
        return result;
    }    
}

module.exports = diceService;