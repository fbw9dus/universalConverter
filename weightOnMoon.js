/* Weight on the moon */

/* Params */
// kg:Number

/* Return */
// kg:Number



// shcwerkraft in erde = 9.8 

// shcwerkraft in moon = 1.6

// 9.8 / 1.6 = 6.125




function fun(){

    var weightOnErth = document.getElementById('moon').value;
    
    var weightOnMoon = weightOnErth / 6.125 

    var weightOnMoon = weightOnMoon.toFixed(2)

    document.getElementById('moonText').innerHTML = ("Your weight on moon is : " + weightOnMoon);

   }

   document.getElementById('moonBtn').onclick = function(){fun()}



/**
  function fun (weightOnErth){z

    var weightOnMoon = weightOnErth / 6.125 
   console.log(weightOnMoon)
   }
   */