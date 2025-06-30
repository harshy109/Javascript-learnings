//MAP
let arr = [10,20,30,40];
//isko store krwaenge
let sqrdArr = arr.map((number)=>{
    return number*number;
})

arr.map((number)=>{
    console.log("Incremented number is", number+1);
})

console.log(sqrdArr);

//FILTER - condition ke basis pe output krwate h array me se
let brr = [1,2,"joe", "mish", true, 1.4];

console.log("Numbers :")
brr.filter((value)=>{
    
    if(typeof(value) === 'number'){
        console.log(value);
    }
})

console.log("Strings :")
brr.filter((value)=>{
    
    if(typeof(value) === 'string'){
        console.log(value);
    }
})

//REDUCE - gives a single output of whole array
//acc - single output
//curr - current element
//by default acc takes first element value a[0], and curr take value of a[1]
//we can set value of acc = 0, by explicilty specifying so curr takes value of a[0];
let crr = [10,20,30,40];
let totalSum = crr.reduce((acc, curr)=>{
    return acc+curr;
},0)
console.log(totalSum);