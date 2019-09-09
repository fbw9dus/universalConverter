/* convert from multiple currencies to euro */

/* Params */
// amount:Number
// currency:String:3:Uppercase

/* Currencies */
// Dollar "USD"
// Yuan ""
// Rupees ""
// Kronen(SW)
// Franken(CH) "CHF"
// Croatian Kuna

/* Return */
// amount:Number (Zwei Kommastellen)


var currencieRates = [0.93, 0.13, 0.02, 0.09, 0.92, 0.13]

var usdToEur = currencieRates[0]
var cnyToEur = currencieRates[1]
var inrToEur = currencieRates[2]
var sekToEur = currencieRates[3]
var chfToEur = currencieRates[4]
var hrkToEur = currencieRates[5]

var result = 0

function convert(amount, convertTo){

    var amount = document.getElementById('amount').value;
    var convertTo = document.getElementById('inputGroupSelect02').value;

    if(convertTo === "USD"){
        result = amount * usdToEur
    } else if(convertTo === "CNY"){
        result = amount * cnyToEur
    } else if(convertTo === "INR"){
        result = amount * inrToEur
    } else if(convertTo === "SEK"){
        result = amount * sekToEur
    } else if(convertTo === "CHF"){
        result = amount * chfToEur
    } else if(convertTo === "HRK"){
        result = amount * hrkToEur
    } else if (convertTo === "EUR") {
        result = amount
    } 
    console.log(convertTo);
    
     result = (amount + " " + convertTo + " = " + result + "EUR");
     console.log(result);
    document.getElementById('euroh').innerHTML = result;
}

document.getElementById('eur').onclick = function(){convert()}; 














