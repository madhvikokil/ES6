let arr = [3,2,1,-6,9,-2,-1];
let newArr = [];
let sum = 0;
for(i=0;i<arr.length;i++)
{
  for(j=i+1;j<=arr.length;j++)
  {
    newArr=arr.slice(j,j+3);
    
    if(newArr.length<3)
    {
      break;
    }
    newArr=[arr[i],...newArr];
   // console.log(newArr);
    for(let i=0;i<newArr.length;i++){
       
      sum = sum + newArr[i];
     // console.log("sum:"+sum);
    }
      if(sum == 0){
        console.log("Array : "+newArr);
      }
        
      else{
       sum = 0;
      }
    }
}
