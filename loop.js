


function is_perfect(){

    var number= document.getElementById('nummer').value ;

    var temp = 0;
        for(var i=1; i<=number/2;i++)
        {
            if(number%i ===0)
            {
                temp = temp + i;
            }
        }

        if (temp == number && temp!== 0){
           document.getElementById('text').innerHTML = "this is a perfect number";
           console.log("perfect");
        }
        else{
            document.getElementById('text').innerHTML = "this is not a perfect number";
            console.log("not perfect");
        }

        console.log(number);
    
}

document.getElementById('show').onclick = function(){is_perfect()};

