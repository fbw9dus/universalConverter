/* Params */
km:Number

/* Return */
miles:Number


function kmToMile () {
    var miles = document.getElementById('km').value;
    var typeOfConvert = document.getElementById('mileSelect').value;
    console.log(typeOfConvert);
    if(typeOfConvert == 'mile2km'){
        var result = miles *1.609;
    }else if(typeOfConvert == 'km2mile'){
        var result = miles * 0.621
    }
    document.getElementById('mile').innerHTML = ("Your result = .. " + result);   
}

document.getElementById('milebtn').onclick = function(){kmToMile()};




  /**miles:Number
var miles = parseFloat(prompt("Please enter a number to compare it between Mile and Kilometer:"));
var kilometers = miles * 1.609;
function kmTomile (x) {
    var result = x *1.609;
    return result;
}
console.log(kmTomile(miles));
function convert(distance, typeOfConvert) {
    if(typeOfConvert == 'km2mile'){
        var result = distance *1.609;
    }else if(typeOfConvert == 'mile2km'){
        var result = distance * 0.621
    }
    return result;
  }
  console.log(miles+'miles ='+convert(miles, 'km2mile')+'km');
  console.log(miles+'km ='+convert(miles, 'mile2km')+' miles');*/