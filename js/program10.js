function accept(...a){
  let cnt = 0;
  let sum = 0;
  let arr = [];
  
  for(let i=0;i<a.length;i++){
    if(isNaN(a[i])){
      cnt++;
    }
    
    if(Number.isInteger(a[i])){
      arr.push(a[i]);
      sum = sum + a[i];
      
    }
  }
 
  console.log("Number of invalid arguments : "+cnt);
  console.log("Sum : "+sum);
  console.log("Max : "+Math.max(...arr));
  console.log("Max : "+Math.min(...arr));
  }

accept(1,2,"a",9,8,"p");
