let a=5;
let b=a;
b=10;
console.log(b);
let obj1={
    name:'abc',
    age:22

}
let obj2=obj1//both obj1 and obj2 point to the same memory location.
obj2.name='xyz';//You are modifying the same object
console.log(obj1.name)//xyz

//Call Stack Flow

function mul(a, b) {
  return a * b;
}

function square(n) {
  return mul(n, n);
}

function print(n) {
  console.log(square(n));
}

function main() {
  print(8);
}

main();


//*.Falsy values
if("asha"){
    console.log('true')
}
else{
    console.log("false")
}
//implict type conversion
console.log(5+'5')
console.log(5-'5')
//==(loose equality)
console.log(5=='5')//true
console.log(5==5)//true
//===(strict equality)
console.log(5==='5')//false
console.log(5===5)//true