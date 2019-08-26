let str = "hello";
    let splitStr = str.split(""); 
 
   // console.log(splitStr);

    let reverseStr = splitStr.reverse();

    //console.log(reverseStr);
 
    let newStr = reverseStr.join("");
   // console.log(newStr);
   // console.log(str);
    if(str == newStr){
      console.log("String is palindrome");
    }
    else{
      console.log("String is not palindrome");
    }

