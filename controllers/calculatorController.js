'use strict';

class calculatorController {
    
    static sum(){
        let response =0;

        for(let i =0; i < arguments.length; i++){
            response += arguments[i];            
        }         
        return{result:response};
    }

    static index(req,res){
       let result =this.sum(0,req);
        console.log(result);
    }
}




module.exports = calculatorController;