//if-else statements
let marks=30
if(marks>=40){
    console.log('pass')
}
else{
    console.log('fail')
}
//Ternary Operator
let mark=60
let result=mark>=40?'pass':'fail'
console.log(result)
//functions
function add(a,b){
    console.log(a+b)
}
add(2,4)
//Arraow function
const sub=(a,b)=>{console.log(a-b)}
sub(2,4)
//callback
const sub1=(a,b)=>{console.log(a-b)}
const mul=(a,b)=>{console.log(a*b)}
const calc=(a,b,fun)=>{
    fun(a,b)
}
calc(4,3,sub1)
calc(4,3,mul)
//loops
let num=[2,4,5,6,7]
for(let index in num){
     //console.log(index);-will get indices
     console.log(num[index])
}
let nums=[2,4,5,6,8]
let obj={
    name:'abc',
    state:{
    city:'asd'},
    age:22
}
/*for(let index in obj){
    //console.log(index);
    console.log(obj[index]);
}*/
console.log(obj?.state?.city)
console.log(obj?.state?.town)
console.log(obj?.states?.town)
