function generate(x,y){
 var min=x; 
 var max=y;  
 var random = Math.floor(Math.random() * (+max - +min)) + +min; 
   // console.log("p"+max - +min + +min);
   
    console.log("Random Number Generated : " + random );  
}

generate(1,5);
