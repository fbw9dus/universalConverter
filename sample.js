function sample(){
    for(i=1; i <=10; i++){
        for (j=1; j<i; j++){
            document.write("*");
        }
        var distance = (10 -i) * 2;
        while (distance >= 1){
            document.write("&nbsp");
            distance--;
        }
        for(k=1; k<i; k++){
            document.write("*");
        }
        document.write("<br>")
    }
    for(i=1; i <=10; i++){
        for (j=10; j>i; j++){
            document.write("*");
        }
        var distance = (10 -i) * 2;
        while (distance >= 1){
            document.write("&nbsp");
            distance--;
        }
        for(k=10; k>i; k--){
            document.write("*");
        }
        document.write("<br>")
    }
}

sample()