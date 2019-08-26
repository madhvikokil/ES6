let arr = [];
while(arr.length <99){
    var s = arr.length;
    var r = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
 console.log(arr.sort(function(a, b){return a - b}));
  let n = 99;
   let miss = (n + 1) * (n + 2) / 2; 
    for (let i = 0; i < n; i++) 
        miss = miss - arr[i]; 
   console.log("missing value : "+miss);
