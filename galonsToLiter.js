/* Galons to liter */

/* Params */
// galons:Number

/* Return */
// liter:Number

var oneLiter
var oneUsGallon


var j = prompt (" PLZ ! Enter the Value : ", j )
var result = 0

function convert(amount, convertTo){

    var amount = document.getElementById('amount').value;
    var convertTo = document.getElementById('inputGroupSelect02').value;


        if (amount == oneLiter){
            oneLiter  = [ 0.264172052 * oneUSGallon  ]
            result += j * oneLiter
            return result
            } else if (amount == oneUsGallon){
            oneUsGallon  = [ 3.78541178 * oneLiter  ]
            result += j * oneUsGallon
            return result
            } else {
            alert("PLEASE SELECT THE CURRENCY")
        }

}
console.log(result);


document.getElementById('Imp/L/G').innerHTML = result ;

document.getElementById('Imp/L/G').onclick = function(){convert()};
