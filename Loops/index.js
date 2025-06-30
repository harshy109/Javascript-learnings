let arr = [10,20,30,40];
//traditional loop
let length = arr.length;
console.log("traditional loop");
for(let index = 0; index < length ; index++){
    console.log(arr[index]);
}

//forEach
console.log("\nfor each loop");
arr.forEach((value, index)=>{
    console.log(value);
})

//for-in : enumerable property of objects
//used for objects
let obj = {
    name : "Neha",
    age : 21,
    weight : 50,
    school : "ABSSS",
}
for(let key in obj){
    console.log(key," : ", obj[key]);
}

//for-of : iterable property of array , strings
console.log("\nUsing for-of")
for(let val of arr){
    console.log(val);
}
console.log("\nUsing for-of")
let name = "Harshita";
for(let char of name){
    console.log(char);
}