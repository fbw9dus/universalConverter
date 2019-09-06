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
    } else{
        alert("PLEASE SELECT THE CURRENCY")
    }
    console.log(convertTo);
    
     result = (amount + " " + convertTo + " = " + result + "EUR");
     console.log(result);
    document.getElementById('euroh').innerHTML = result;
}

document.getElementById('eur').onclick = function(){convert()}; 


/*
var crrncy = {'EUR': {'PLN': 4.15, 'USD': 0.83}, 'USD': {'PLN': 3.45, 'EUR': 1.2}}
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;
  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * crrncy[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / crrncy[to][from]);
  }
  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency); */













