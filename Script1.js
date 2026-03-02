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
let arr=[1,2,3,4,5,6]
const addone=(num)=>{return num+1}
let res=arr.map(addone)

let double=arr.map((num)=>num*2)
console.log(double)
let double1=arr.map((num)=>num*5)
console.log(double1)
let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyboard',price:2000},
]
//map will return every elements
let productName=products.map((product)=>{console.log(product.name)})
let productName1=products.map((product)=>{console.log(product.price)})
let productName2=products.map((product)=>{console.log(product.id)})

//filter will filter out the elements in array based on condition
let arr1=[1,2,3,4,5,6]
let b=arr1.filter((num)=>num>3)
console.log(b);
let sum=arr1.reduce((total,curr)=>{return total+curr},0)
console.log(sum)
   


let arr2=[22,33,44,66,77]
let [x,,y]=arr2
console.log(y)

let students={
    name:'asha',
    branch:'CSE',
    age:22
}
const{name,branch,age}=students
console.log(name,branch,age);

let cars={
    brand:"BMW",
    year:2024
}
const{brand,year}=cars
console.log(brand,year);
 let arr3=[11,22,3,34,66]
 let arr5=[3,6]
 //spread operator-copy and combine
 let arr4=[...arr3,77,88,...arr5]
 console.log(arr4)
  let newCar={...cars,year:2025}//year updated
  console.log(newCar)
  //rest operator- collect all
  let arr6=[2,5,8,9,7]
  let [first,...other]=arr6
  console.log(other)//output:[5,8,9,7]
  console.log(first)//output:2
  

  console.log('hello');
  setTimeout(()=>{
    console.log("will log after 2 seconds")
  },2000)//all the items in 2 seconds and also always executes at the last
  Promise.resolve('Promise!').then(res=>console.log(res))
  console.log('end')