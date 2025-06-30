//LEVEL 1 
//Q1.Convert temperatures (Celsius to Fahrenheit) using map
let temp = [24, 24.3, 24, 25, 25.5, 26];
let fahr = temp.map((number) => {
    return (number*1.8)+32 ;
})
console.log(fahr);

//Q2. Filter out strings longer than 5 characters
let names = ["Harshita", "Garima", "Ena", "Mahi", "Mohit", "Rohan"];
names.filter((value, index)=>{
    if(value.length > 4){
        console.log(value);
    }
})

//Q3.Count total characters in an array of strings using reduce
let arr = ["Harshita", "Garima", "Ena", "Mahi", "Mohit", "Rohan"];

let ans = arr.reduce((acc, curr)=>{
    var count = 0;
    for(let char of curr){
        count++;
    }
    return acc+count;
},0)
console.log(ans);

//LEVEL 2
const users = [
  { 
    name:'Jatin Rathi', 
    email: 'jatin@mail.com' 
  },
  { 
    name: 'Priyan Bansal', 
    email: 'banslpriya@mail.com' 
  }
];

users.map(user =>{
    console.log("\nUsername : ", user.name);
    console.log("Email : ", user.email);
})