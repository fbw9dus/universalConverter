/* Galons to liter */

/* Params */
// galons:Number

/* Return */
// liter:Number


function convert(){

    var amount = document.getElementById('galonSelect').value;
    var j = document.getElementById('literInput').value;
    var result = "";
        if (amount == "ltg"){
            j  =  0.264172052 * j;
            result = ("Your result is = " + j);
            
            } else if (amount == "gtl"){
            j  =  3.78541178 * j;
            result = ("Your result is = " + j);
            } 

    document.getElementById('literText').innerHTML = result;
            console.log(result);
        }





document.getElementById('literBtn').onclick = function(){convert()};
