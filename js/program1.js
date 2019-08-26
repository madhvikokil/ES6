let arr = [];
let cnt=0;
for(let i=1;i<=100;i++)
  {
    let no=i;
    while(no!=0)
    {
    cnt = no % 10;
    if(cnt==0)
    arr.push(i);
    no=Math.floor(no/10);
     // console.log("floor"+no);
   
    }
  }
//console.log(arr);
  if(arr.length>0)
  console.log("Zeros :"+arr.length);  
