function star() {
    for (k=0;k<10;k++){  
    for (i = 0; i < k; i++) {
    var s = "*";
    var d = s.repeat(i)

    document.getElementById('starText').innerHTML = (d)
    }
    
}
}

document.getElementById('starBtn').onclick = function(){star()}