  /*Primitive Datatypes  (7 types)

  1.String
  2.Number
  3.Bollean
  4.null
  5.undefined
  6.Symbol
  7.BigInt

  Non-Primitive Datatypes ( Reference )

   =>  Arrays , Objects , Functions 

  */

   const cricPlayers = ["Ms Dhoni","Virat Kohli","Rohit Sharma"]

   let someObj = {
    myName : "Ayush",
    myAge : 17,
    myClass : 12,

   }

   const myFunction = function (){
    console.log("My name is Ayush");
    
   }


   console.log(typeof cricPlayers);




   //*******************************************************************

   // Stack Memory   : used Primitive type

   let myFristName = "Aayush"

   let myAnotherName = myFristName
   myAnotherName = "Sammy"


   console.log(myFristName);
   console.log(myAnotherName);

   // Heap Memory     :used Nonprimitive type

   let user = {
    email : "user1@google.com",
    yahoo : "user2@yahoo.com",
   }

   let user1 = user

   user1.email =" ayush@google.com;"

   console.log(user.email);
   console.log(user1.email);

   
   

   



   





