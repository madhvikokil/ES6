let str = "apple";

for(let i=0;i<str.length;i++){
  if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
      console.log("First non repeating char in string is : "+str.charAt(i));
    break;
  }
}

