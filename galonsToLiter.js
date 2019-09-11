/* Galons to liter */

/* Params */
// galons:Number

/* Return */
// liter:Number


function fuel(amount, dir){
    var result
    if (dir == 'ltg'){
        result  =  0.264172052 * amount;            
    }  else if (dir == 'gtl'){
        result  =  3.78541178 * amount;          
    } 

    result = result.toFixed(2);
    
    
    return result
}







