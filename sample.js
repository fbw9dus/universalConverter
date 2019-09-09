function sample() {
    for (i = 0; i < 10; i++) {
      for (j = 0; j < i; j++) {
        document.write("*");
      }
      var d = (10-i)*3;
      while (d>0){
          document.write("&nbsp");
          d--
      }   
     
      for(k=0;k<i;k++){
        document.write("*");
      }
      var s = (10-i)*3;
      while (s>0){
          document.write("&nbsp");
          s--
      }   
      for(k=0;k<i;k++){
        document.write("*");
      }
      document.write("<br>");
    }

    for (a=0;a<5;a++){        
      
            document.write("*");
        
        document.write("<br>")
    }
    
   }

sample();


/**function sample(){
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

 */