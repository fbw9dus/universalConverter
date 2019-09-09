/* inches to centimeter */
function inToCm( ){
    var inch = document.getElementById('intocm').value;
    
    var result = inch * 2.54

    document.getElementById('inchText').innerHTML = ("Your result is = " + result);
}


document.getElementById('inchBtn').onclick = function(){inToCm()}

/* Params */
// inches:Number

/* Return */
// centimeter:Number
