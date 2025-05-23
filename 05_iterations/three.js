// ***********  for of   *********

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5,6]
for (const num of arr) {
   // console.log(num);
    
}

let greeting = " hello World !"
for (const greet of greeting) {
    if(greet ==" " ){
        continue
    }
  //  console.log(`Each char is ${greet}`);
    
}


//    Maps     

let map = new Map()
map.set('NEP',"Nepal")
map.set('IN',"India")
map.set('USA',"United State Of America")

 // console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}

let myObject = {
    'game1':"Free Fire",
    'game2':"Pubg",
    'game3':"Delta Force"
}
// 

