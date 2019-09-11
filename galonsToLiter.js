/* Galons to liter */

/* Params */
// galons:Number

/* Return */
// liter:Number


function fuel(){
   
    var amount = document.getElementById('galonSelect').value;
    var j = document.getElementById('literInput').value;
    console.log(j);
        if (amount == 'ltg'){
            j  =  0.264172052 * j;            
            }  else if (amount == 'gtl'){
                j  =  3.78541178 * j;          
            } 

        j = j.toFixed(2);
    
    document.getElementById('literText').innerHTML = ("Your result is = " + j);
 }





document.getElementById('literBtn').onclick = function(){fuel()};

