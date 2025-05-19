let userEmail = []

if (userEmail){
    console.log("got user email");
}
else {
    console.log("don't have user email");
    
}



//**********falsy value ************8

  //   false, 0, -0, BigTnt 0n, "", null, undefined, NaN

//************* truthy value ************* */

//    "0" , 'false' , " " , [] , {} , function(){} 



// if (userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}


// Nullish Coalescing operator (??) : null , undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 12



console.log(val1);



//   Terniary Operator

// condition ? true : false

let icePrize = 100
icePrize <= 80 ? console.log("less than 80") : console.log("more than 80");

