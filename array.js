function sum_sq(){

    var n =document.getElementById('sqi').value;
    var array = (""+n).split("");
    var sum = 0;
 
    i = array.length;
    while(i--)
    sum += Math.pow(array[i],2);
    document.getElementById('sqh').innerHTML =  "The array form of your number is   " + "["+ array +"]" ;
    document.getElementById('sqa').innerHTML = "the sum of squares of your array = "+ sum;
    

    console.log(array);

}

document.getElementById('sq').onclick = function(){sum_sq()};