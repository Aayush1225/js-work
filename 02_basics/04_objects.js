//const tinderUser= new Object()
const tinderUser = {}

tinderUser.id="2"
tinderUser.name='Ayush'
tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"paduni@email.com",
    fullname:{
        userFullName:{
            firstName:"Paduni",
            lastName:"Chas"
        }

    }
}
//console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2= {3:"y",4:"z"}
//const obj3 = {obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id:2,
        email:"haseni@gmail.com",
        name:"Haseni lamsal"
    },
    {
        id:4,
        email:"paduni@gmail.com",
        name:"Paduni "
    }
]
users[1].name
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




