
'use strict';

class calculator {
    
    static sum(){
        let response =0;

        for(let i =0; i < arguments.length; i++){
            response += arguments[i];            
        }         
        return{result:response};
    }


}

module.exports = calculator;
